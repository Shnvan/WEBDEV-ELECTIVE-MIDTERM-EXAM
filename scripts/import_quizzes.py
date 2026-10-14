"""Import the supplied quiz compilations without executing document content."""
from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET
import json
import re
import hashlib
import sys
import pdfplumber

ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = Path('C:/Users/Ivan/Downloads')
NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
      'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
SOURCES = [
    ('webdev-34', 'webdev', '3-4', 'BSIT 3-4', 'HTML, CSS & PHP', 'BSIT 3-4 WEBDEV - Quiz Compilation (1).docx'),
    ('webdev-33', 'webdev', '3-3', 'BSIT 3-3', 'HTML, CSS, JavaScript & PHP', 'BSIT 3-3_WebDev_Quizzes with KTC.docx'),
    ('webdev-32', 'webdev', '3-2', 'BSIT 3-2', 'HTML, JavaScript & CSS', '3-2 GROUP1-8-10 Webdev Quiz Compilation.docx.pdf'),
    ('webdev-html', 'webdev', None, 'HTML topic quiz', 'HTML5 & accessibility', 'QUIZ - HTML.docx'),
    ('webdev-css', 'webdev', None, 'CSS topic quiz', 'Styling & responsive design', 'QUIZ - CSS.docx'),
    ('webdev-php', 'webdev', None, 'PHP topic quiz', 'PHP fundamentals', 'Quiz - PHP.docx'),
    ('elective-34', 'elective', '3-4', 'BSIT 3-4', 'Datasets, images & audio', 'BSIT 3-4 ELECTIVE - Quiz Compilation.docx'),
    ('elective-33', 'elective', '3-3', 'BSIT 3-3', 'ML workflow, training, images & audio', 'BSIT 3-3_IT Elective 1_Quizzes with KTC.docx.pdf'),
]
KEYS = {
    'webdev-34': {'2': [2, 2, 2, 1, 1], '9': [0, 2, 1, 1, 1, 1, 1, 1, 1, 1], '5': [2, 2, 3, 0, 1, 0, 0]},
    'elective-34': {'1': [0, 2, 0, 3, 1, 2, 2, 3, 0, 3], '5': [2, 0, 1, 0, 2, 1, 2, 0, 1, 3], '3': [1, 0, 2, 2, 0, 2, 2, 1, 2, 0]},
    'elective-33': [2,0,3,0,0,3,0,1,0,2,3,0,1,2,3,1,2,3,0,0,1,1,2,0,2,1,1,2,1,1,0,1,0,0,0,0,1,0,0,0],
    'webdev-32': {'1': [2,1,3,1,1,2,0,1,2,1], '8': [1,3,2,2,2,0,3,0,3,2], '10': [2,0,1,0,1,0,1,1,2,0]},
}
GROUP_NAMES = {
    'webdev-33': ['HTML & semantic structure', 'CSS & responsive design', 'JavaScript & the DOM', 'PHP fundamentals'],
    'elective-33': ['Datasets & ML workflow', 'Model training & evaluation', 'Image classification', 'Audio classification'],
    'webdev-32': {'1': 'HTML5 & semantic structure', '8': 'JavaScript & the DOM', '10': 'CSS & responsive design'},
}
CODE = {
    'webdev-34-5-8': '<?php\n$grade = 85;\n\nif ($grade >= 90) {\n    echo "Excellent";\n} elseif ($grade >= 80) {\n    echo "Very Good";\n} else {\n    echo "Needs Improvement";\n}',
    'webdev-34-5-9': '<?php\nfunction calculate($a, $b) {\n    return ($a + $b) * 2;\n}\n$result = calculate(5, 3);\necho $result;\n?>',
    'webdev-34-5-10': '<?php\n$student = [\n    "name" => "Joben",\n    "grades" => [85, 90, 88]\n];\necho $student["grades"][2];\n?>',
    'webdev-33-2-12': 'HTML:\n<p class="text-style text-highlight">Sample Text</p>\n\nCSS:\n.text-highlight { color: red; }\n.text-style { color: orange; }',
    'webdev-33-2-14': '.box {\n    width: 100px;\n    height: 50px;\n    padding: 40px 50px 30px 0px;\n    margin: 10px 30px 30px 60px;\n    border: 5px solid red;\n    background: lightblue;\n}\n\n<div class="box">Hello World!</div>',
}

def docx_blocks(path, source_id):
    with ZipFile(path) as z:
        root = ET.fromstring(z.read('word/document.xml'))
        rels = {r.attrib['Id']: r.attrib['Target'] for r in ET.fromstring(z.read('word/_rels/document.xml.rels'))}
        numbering = {}
        if 'word/numbering.xml' in z.namelist():
            nroot = ET.fromstring(z.read('word/numbering.xml'))
            abstracts = {}
            for a in nroot.findall('w:abstractNum', NS):
                abstracts[a.get('{'+NS['w']+'}abstractNumId')] = {
                    l.get('{'+NS['w']+'}ilvl'): l.find('w:numFmt', NS).get('{'+NS['w']+'}val')
                    for l in a.findall('w:lvl', NS) if l.find('w:numFmt', NS) is not None}
            for n in nroot.findall('w:num', NS):
                aid = n.find('w:abstractNumId', NS).get('{'+NS['w']+'}val')
                numbering[n.get('{'+NS['w']+'}numId')] = abstracts.get(aid, {})
        blocks = []
        for p in root.findall('.//w:p', NS):
            text = ''.join(t.text or '' for t in p.findall('.//w:t', NS)).strip()
            num = p.find('w:pPr/w:numPr', NS)
            fmt = None
            if num is not None and num.find('w:numId', NS) is not None:
                nid = num.find('w:numId', NS).get('{'+NS['w']+'}val')
                level = num.find('w:ilvl', NS)
                fmt = numbering.get(nid, {}).get(level.get('{'+NS['w']+'}val') if level is not None else '0')
            yellow = any(n.get('{'+NS['w']+'}val') == 'yellow' for n in p.findall('.//w:highlight', NS))
            images = []
            for blip in p.findall('.//a:blip', NS):
                target = rels.get(blip.get('{'+NS['r']+'}embed'))
                if target:
                    archive_name = 'word/' + target
                    suffix = Path(target).suffix
                    asset = ROOT/'assets'/'questions'/(source_id+'-'+Path(target).stem+suffix)
                    asset.parent.mkdir(parents=True, exist_ok=True)
                    asset.write_bytes(z.read(archive_name))
                    images.append(asset.relative_to(ROOT).as_posix())
            if text or images:
                blocks.append({'text': text, 'fmt': fmt, 'correct': yellow, 'images': images})
        return blocks

def pdf_blocks(path):
    blocks = []
    with pdfplumber.open(path) as d:
        for i, page in enumerate(d.pages):
            for line in (page.extract_text() or '').splitlines():
                blocks.append({'text': line.strip(), 'page': i+1})
    return blocks

def parse(source):
    sid, subject, section, label, desc, filename = source
    path = DOWNLOADS/filename
    blocks = pdf_blocks(path) if path.suffix == '.pdf' else docx_blocks(path, sid)
    questions, current, group_id, group_title = [], None, 'topic', desc
    key_started = False
    key_lines = []
    def finish():
        nonlocal current
        if current:
            current['prompt'] = re.sub(r'\s+', ' ', current['prompt']).strip()
            current['options'] = [re.sub(r'\s+', ' ', t).strip() for t in current['options']]
            questions.append(current)
            current = None
    for b in blocks:
        text = b['text']
        if re.search(r'Key to Correction', text, re.I):
            finish(); key_started = True; continue
        if key_started:
            if text: key_lines.append(text)
            continue
        g = re.match(r'GROUP\s+(\d+)\s*:?(.*)', text, re.I)
        part = re.match(r'Part\s+(\d+)\s*:?', text, re.I)
        if g or part:
            finish()
            group_id = (g or part).group(1)
            group_title = (g.group(2).strip(' :') if g else GROUP_NAMES[sid][int(group_id)-1])
            if not group_title:
                group_title = GROUP_NAMES.get(sid, {}).get(group_id, desc)
            continue
        if not text and b.get('images'):
            if current: current['images'].extend(b['images'])
            continue
        if not text or text.upper().strip(' :') == 'QUIZ' or text.startswith('Instructions:'):
            continue
        q = re.match(r'^(\d+)(?:\s*[-–]\s*(\d+))?\s*[.)](?!\d)\s*(.+)', text)
        auto_q = b.get('fmt') == 'decimal' and not q
        if q or auto_q:
            finish()
            number = q.group(1) if q else str(sum(x['groupId']==group_id for x in questions)+1)
            current = {'id': sid+'-'+group_id+'-'+number, 'sourceId': sid, 'subject': subject,
                       'section': section, 'groupId': group_id, 'group': group_title,
                       'number': number+('-'+q.group(2) if q and q.group(2) else ''),
                       'prompt': q.group(3) if q else text, 'options': [], 'correct': None,
                       'type': 'written' if q and q.group(2) else 'choice',
                       'images': list(b.get('images', [])), 'page': b.get('page')}
            continue
        if current is None: continue
        if text.startswith('Answer:'):
            current['type'] = 'text'; current['answer'] = text.split(':',1)[1].strip();continue
        option = re.match(r'^([A-Ea-e])[.)]\s*(.+)', text)
        auto_option = b.get('fmt') in ['upperLetter', 'lowerLetter']
        if option or auto_option or (path.suffix == '.docx' and sid in ['webdev-34','elective-34'] and current['type'] == 'choice'):
            value = option.group(2) if option else text
            if b.get('correct'): current['correct'] = len(current['options'])
            current['options'].append(value)
        elif current['options']:
            current['options'][-1] += ' '+text
        else:
            current['prompt'] += ' '+text
    finish()
    if sid == 'webdev-33':
        # Written KTC paragraphs alternate question number and answer.
        for i, line in enumerate(key_lines):
            if re.fullmatch(r'\d+', line) and i+1 < len(key_lines):
                answer = re.match(r'^([A-Da-d])[.)]', key_lines[i+1])
                if answer:
                    found = next((q for q in questions if q['number']==line), None)
                    if found: found['correct'] = ord(answer.group(1).upper())-65
    for q in questions:
        if q['type'] == 'choice' and q['correct'] is None:
            key = KEYS.get(sid)
            if isinstance(key, list): q['correct'] = key[int(q['number'])-1]
            elif key:
                assert int(q['number']) <= len(key[q['groupId']]), (sid, q)
                q['correct'] = key[q['groupId']][int(q['number'])-1]
        if q['type'] == 'written':
            q['answer'] = 'Provide alternative text for meaningful images so people using screen readers can understand their purpose.'
            q['rubric'] = 'Name a valid accessibility principle and explain how it helps someone, using one sentence. Other valid examples include keyboard navigation, readable contrast, and clear form labels.'
        if q['images']:
            q['imageAlt'] = 'Original code example for question '+q['number']+'. A readable code transcript is available below.'
            q['code'] = CODE[q['id']]
    expected = {'webdev-34':26,'webdev-33':40,'webdev-32':30,'webdev-html':10,'webdev-css':15,'webdev-php':10,'elective-34':30,'elective-33':40}[sid]
    assert len(questions)==expected, (sid,len(questions),expected)
    for q in questions:
        assert q['prompt'] and q['group'], q
        if q['type']=='choice': assert 0 <= q['correct'] < len(q['options']), q
        else: assert q.get('answer'), q
    return {'id':sid,'subject':subject,'section':section,'label':label,'description':desc,'file':filename,
            'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'questions':questions}

if __name__=='__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    compilations = [parse(source) for source in SOURCES]
    result = {'version':1,'compilations':compilations}
    (ROOT/'data').mkdir(exist_ok=True)
    (ROOT/'data'/'quizzes.js').write_text('window.QUIZ_DATA = '+json.dumps(result,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
    print(json.dumps({'questions':sum(len(c['questions']) for c in compilations),'compilations':{c['id']:len(c['questions']) for c in compilations}}))
