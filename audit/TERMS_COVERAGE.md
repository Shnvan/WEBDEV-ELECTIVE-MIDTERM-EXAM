# Elective PPT term coverage

230 entries from the supplied main-term list, across 13 topics and 3 PDFs. Every entry has a curated definition and one identification question; repeated names remain in their original topic contexts. Practice progress is independent of the quiz compilations. The content paraphrases the supplied slides, with clarification notes where wording is incomplete or misleading.

The three supplied presentations match the BSIT 3-4 reported groups. All sections currently uses these available decks too; other sections’ presentations have not been supplied.

## Group 3 · Audio Classification

Group 3 Audio Classification.pdf · 60 pages · SHA-256 bc34c28797f872c9da9f7d767f1db2ff2d2394bde79256602fc117f4463d3418

### Sound Classification

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Sound Classification | 3 | Assigning a recording to a category by analyzing its acoustic patterns, such as speech, music, animal calls or environmental noise. |  |
| Audio Wave | 5, 6 | A time-varying acoustic signal captured as a recording or stream, then divided into short clips and prepared for analysis. |  |
| Spectrogram | 7 | A time-frequency picture of sound whose intensity or color indicates how strong different frequency components are at each moment. |  |
| CNN Architecture | 8 | A convolution-based deep neural network that learns local patterns from an audio spectrogram treated as a two-dimensional input. |  |
| Steps of CNN Architecture | 9 | The ordered spectrogram-processing sequence of input, convolution, activation, pooling, and flattening with dense processing. |  |
| Input Layer | 9 | The first stage of the audio CNN that receives the spectrogram data before feature-processing layers. |  |
| Convolutional Layer | 9 | The CNN stage that applies learned filters to identify local patterns in the spectrogram input. |  |
| ReLU Function | 9 | The activation operation used between CNN processing stages that keeps positive values and replaces negative values with zero. | ReLU means Rectified Linear Unit; f(x) = max(0, x). |
| Pooling Layers | 9 | CNN stages that summarize local responses to reduce spatial dimensions while retaining useful feature information. |  |
| Flattening and Dense Layers | 9 | The stages that reshape extracted features into a vector and combine them through fully connected processing for a prediction. | Flattening reshapes; dense layers learn combinations. They are different operations grouped on this slide. |
| Feature Mapping | 10 | Representing important patterns in an audio signal as learned feature maps that help distinguish sounds. |  |
| Linear Classifier | 11 | A classifier that separates categories using a linear decision function over the extracted audio feature values. | A classifier after feature extraction need not always be linear. SVMs can also use nonlinear kernels. |
| Final Output | 12 | The predicted sound label, often accompanied by class probability scores, produced after the model processes an audio sample. |  |
| Applications of Audio Classification | 13 | Practical uses of sound-category predictions, including environmental monitoring, sound isolation and analysis of vocal tone. |  |

### Audio Datasets

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Audio Datasets | 15, 16 | Collections of recorded sound examples used to train, validate and test models for audio-processing tasks. |  |
| Types of Audio Datasets | 17, 18, 19, 20 | The broad recording collections grouped as speech, music and environmental sounds according to their content. |  |
| Speech Datasets | 18 | Collections of recordings of spoken words and phrases, often paired with transcriptions or speaker information. |  |
| Music Datasets | 19 | Collections of musical recordings used to study properties such as genre, rhythm, harmony or other musical characteristics. |  |
| Environmental Sound Datasets | 20 | Collections of recordings of everyday surroundings, such as animal calls, weather, vehicles and human activity. |  |
| Audio Dataset Selection | 21, 22, 23, 24 | Choosing a sound collection by considering recording diversity, size, class balance, annotation quality and relevance to the task. |  |
| Technical Audio Properties | 25, 26, 27, 28, 29 | Recording characteristics such as samples per second, sample resolution, channel count, clip length and loudness range. |  |
| Sampling Rate | 26 | The number of digital audio samples recorded each second, measured in hertz or kilohertz. | The slide labels this “sampling technique”; sampling rate is the standard name for the stated quantity. |
| Bit Depth | 26 | The number of bits used to represent each digital audio sample, affecting amplitude resolution and quantization precision. |  |
| Channels | 27 | The separate audio signal paths in a recording: mono uses one and stereo normally uses two. |  |
| Duration | 28 | The elapsed length of an audio clip, from short commands lasting seconds to longer conversations or music. |  |
| Dynamic Range | 29 | The difference between the quieter and louder levels in a recording, relevant to loudness handling and clipping. |  |
| Metadata and Labeling | 30, 31, 32, 33, 34 | Information attached to audio, including class tags, transcriptions, source domain, speaking style, speaker details and recording conditions. |  |
| Labels and Annotation | 31 | The class tags or transcriptions assigned to audio examples to describe the target content for learning or evaluation. |  |
| Derived Audio Features | 35, 36, 37, 38, 39 | Calculated descriptors of a sound signal, including spectral envelopes, frequency-energy patterns, sign changes and musical pitch classes. |  |
| MFCCs | 36 | Mel-frequency cepstral coefficients: compact descriptors of the spectral envelope, commonly used in speech and music analysis. | The standard word is “cepstral”; the slide prints “capstral.” |
| Spectral Features | 37 | Descriptors of how signal energy is distributed across frequencies, including centroid, bandwidth, contrast and roll-off. |  |
| Zero-Crossing Rate | 38 | A measure of how frequently an audio waveform changes sign as it crosses the zero-amplitude level. |  |
| Chroma Features | 39 | Descriptors that group musical energy by pitch class to represent harmonic content in music analysis. |  |

### Audio Datasets in Modern Machine Learning

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Structural Taxonomy | 42 | Organizing sound categories using production mechanisms, acoustic properties, semantic context and hierarchical or temporal relationships. |  |
| Audio Modalities and Representations | 43 | The different forms of audio input, including one-dimensional waveforms, two-dimensional log-mel spectrograms, multichannel recordings and symbolic music data. |  |
| Cross-Modal Taxonomies | 44 | Linking sound categories with other kinds of information, such as text, captions, video or biological signals, for multimodal learning. |  |
| Taxonomy Challenges | 45 | Difficulties in sound-category systems caused by overlapping sources and previously unknown sounds in open environments. |  |
| Annotation Paradigms | 46, 47 | The rules and approaches for assigning meaning and boundaries to sound, including standardized ground truth or diverse human interpretations. |  |
| Data Representations | 48 | Machine-readable structures made from audio, such as transcribed text, acoustic features, spectrogram images and multimodal combinations. |  |
| Pipeline Engineering | 49, 50 | Designing a consistent audio-processing workflow for ingestion, preprocessing, segmentation, labeling, batch processing and storage. |  |
| Feature Extraction | 51 | Transforming raw waveforms into compact informative descriptors, such as spectrograms, MFCCs, learned embeddings or prosodic measurements. |  |

### Model Training

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Model Training | 53 | Teaching an audio model to recognize patterns by representing sound as data and adjusting learned parameters through training. |  |
| Model Training Process | 54 | The four-stage audio-learning sequence: collect and prepare data, extract features, train and optimize, then evaluate and validate. |  |
| Data Collection and Preparation | 55 | Gathering target sound recordings, labeling them, standardizing sampling rates, reducing noise and segmenting usable clips. |  |
| Feature Extraction | 56 | The preparation stage that converts collected sound waveforms into visual or mathematical inputs such as mel-spectrograms or MFCCs. |  |
| Training and Optimization | 57, 58 | Feeding labeled feature batches to a model, calculating loss and adjusting weights through repeated optimization steps over training epochs. | More epochs are not a universal fix. Watch validation performance to avoid overfitting. |
| Evaluation and Validation | 59 | Measuring an audio model on held-out recordings and using development results to guide refinements before a separate final test. | Keep validation used for tuning distinct from the test set reserved for final evaluation. |
| Hyperparameters | 60 | Training settings chosen outside the learned weights, including learning rate, batch size, epoch count and architecture configuration. |  |

## Group 5 · Image Classification

Group 5 - Image Classification; Image Dataset Gathering and Preparation; Model Training; Performance Assessment; Application Integration and Testing.pdf · 96 pages · SHA-256 f44693732f448e2e88ddac65a64ae066edca4144db9cd38ab386db65b081ed54

### Image Classification

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Image Classification | 4 | Assigning one or more predefined categories to an entire image based on its visual content, rather than locating each object within it. |  |
| Types of Image Classification | 5, 6 | Ways to categorize image-labeling tasks by number of possible categories, labels per image and the structure of the category hierarchy. |  |
| Binary Classification | 5 | An image-labeling task with exactly two possible categories, such as dog versus not dog. |  |
| Multi-Class Classification | 5 | An image-labeling task with more than two possible categories but exactly one selected category per image. |  |
| Single-Label Classification | 5 | A labeling arrangement in which every image receives exactly one category, regardless of how many categories are available. |  |
| Multi-Label Classification | 5 | A labeling arrangement in which one image can receive multiple correct categories at the same time. |  |
| Flat Classification | 6 | Treating image categories at a single level instead of organizing them into parent-child relationships. |  |
| Hierarchical Classification | 6 | Organizing image categories into a tree that proceeds from broad categories to progressively more specific ones. |  |
| How Machines See Images | 7 | Representing pictures as grids of numerical pixel values so a model can detect patterns such as edges, textures, shapes and colors. |  |
| Approaches to Image Classification | 8 | The two broad image-recognition approaches contrasted in the slides: manually designed features with a classifier, or automatically learned neural features. |  |
| Traditional Machine Learning | 8 | The image-recognition approach that uses human-designed visual features before a separate classifier sorts examples. |  |
| Deep Learning | 8 | The approach that learns useful visual features through multiple neural-network processing layers instead of relying only on manually designed features. |  |
| CNN Architectures | 9 | Predefined convolutional network designs that combine layers to learn and classify visual patterns. | The slide also lists Vision Transformers, which are a different model family, rather than CNN architectures. |
| Real-World Applications | 10 | Practical uses of assigning image categories in healthcare, agriculture, security, quality control and social-media systems. |  |
| Common Challenges | 11 | Factors that make visual recognition harder, including memorization, uneven category counts, lighting or angle changes, hidden objects and similar-looking classes. |  |

### Image Dataset Gathering and Preparation

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Image Datasets | 13 | Collections of pictures, usually with labels or annotations, used for training, validation or testing of visual models. |  |
| Image Dataset Gathering | 14, 15, 16, 17, 18, 19, 20, 21, 22 | Obtaining pictures through openly available collections, website extraction, direct photography or computer-generated examples. |  |
| Public Datasets | 15 | Image collections made openly accessible for inspection or download, subject to their particular usage permissions. | Public access does not by itself grant unrestricted reuse rights. |
| Web Scraping | 19 | Collecting website images by locating image elements or URLs and saving the content for a dataset, manually or through automation. |  |
| Manual Capture | 20, 21 | Personally photographing target objects from varied distances, perspectives or rotations to create dataset examples. |  |
| Synthetic Data Generation | 22 | Creating artificial examples through simulations, generative models or both when original data is scarce or difficult to collect. |  |
| Dataset Organization | 23, 24 | Structuring pictures together with labels, annotations and metadata so the collection can be consistently accessed by learning software. |  |
| Class-Folder Structure | 25 | An image-storage arrangement where categories have separate directories and the directory path itself supplies the label. |  |
| Flat Structure | 25, 26, 27 | An image-storage arrangement where pictures share one directory and a separate annotation file records each image's labels. |  |
| Data Labeling and Annotation | 28, 29, 30 | Assigning information about what pictures contain so supervised models can learn the intended categories or other visual targets. |  |
| Image Labeling | 29 | Identifying raw pictures and attaching one or more class descriptions to state their machine-learning context. |  |
| Manual Labeling | 30 | A human annotator provides the labels directly, with quality depending on their skill and consistency. |  |
| Semi-Automated Labeling | 30 | A model proposes labels and a human reviews, verifies or corrects those proposals before use. |  |
| Data Cleaning | 31, 32 | Finding and correcting errors or inconsistencies in collected image data so it becomes accurate, consistent and usable. |  |
| Duplicate Detection and Removal | 33 | Finding repeated or highly similar pictures and removing redundant examples that could distort the dataset or leak across splits. |  |
| Exact Duplicates | 33 | Repeated image files whose stored content is identical, rather than merely visually similar. |  |
| Near-Duplicates | 33 | Pictures that look very similar but differ in stored bytes, such as recompressed, slightly cropped or closely spaced burst images. |  |
| Corrupted / Unreadable File Detection | 34 | Checking for image files that cannot open or have damaged content, such as incomplete downloads, invalid files or severe artifacts. |  |
| Irrelevant Image Filtering | 34, 35 | Removing collected pictures that are off-topic, show the wrong subject or make the target object too difficult to see. |  |
| Handling Mislabeled Data | 36 | Reviewing suspicious category assignments, correcting wrong labels or removing examples whose labels cannot be trusted. |  |
| Data Preprocessing | 37, 38, 39, 40, 41, 42 | Making raw image inputs consistent for a model through size adjustment, numeric scaling, channel conversion and file-format consistency. |  |
| Resizing | 38, 39, 40 | Changing image dimensions to the model's input size by stretching, cropping or padding, while considering aspect-ratio distortion. |  |
| Normalization | 41 | Rescaling image pixel values from their raw numeric range into a model-compatible range or standardized scale. | Examples on the slide include division by 255 and per-channel mean/standard-deviation scaling. |
| Color Space Conversion | 42 | Changing how pixel colors are represented, for example converting three-channel RGB to grayscale or HSV. |  |
| Format Standardization | 42 | Converting mixed image-file types into a consistent chosen format so loading and processing behave predictably. |  |
| Data Augmentation | 43, 44 | Making modified copies of existing training pictures through realistic transformations such as rotation, flipping, zoom or brightness adjustment. |  |
| Handling Class Imbalance | 45, 46 | Addressing uneven class frequencies using techniques such as majority-class downsampling and assigning greater training weight to minority examples. |  |
| Splitting the Dataset | 47, 48 | Partitioning image examples into separate subsets for learning parameters, tuning development choices and final evaluation. |  |
| Training Set | 48 | The image subset used directly to learn the model's parameters and visual patterns. |  |
| Validation Set | 48 | The held-out image subset used during development to monitor learning, compare choices and tune settings. |  |
| Testing Set | 48 | The image subset reserved for the final assessment of the trained model, separate from weight updates and development tuning. |  |
| Ethical and Legal Considerations | 49, 50, 51 | Responsible dataset-use considerations covering permission, personal information and unequal representation of people or conditions. |  |
| Copyright and Licensing | 50 | Checking whether image-use permissions allow the intended reuse and whether attribution or usage restrictions apply. | An openly accessible image is not automatically unrestricted. Check the actual dataset license. |
| Privacy | 50 | Protecting people represented in training pictures, particularly where faces or identifying content were collected without appropriate consent. |  |
| Dataset Bias | 51 | Unequal representation of people, regions or conditions in collected images that can cause uneven model performance. |  |

### Model Training

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Model Training | 53, 54 | Adjusting a visual model's weights and biases by predicting, measuring error and improving those parameters with training data. |  |
| Training from Scratch | 55 | Beginning a visual model with newly initialized weights and learning its features from the available training data. |  |
| Transfer Learning | 55 | Adapting a model whose weights were already learned from another dataset to a new image task. |  |
| Training Process | 56, 57 | The repeated image-learning cycle of prediction, error measurement, backward gradient calculation and optimizer parameter adjustment. |  |
| Forward Pass | 56 | Running an image batch through the current model to compute predictions before calculating error and gradients. |  |
| Loss Calculation | 56 | Measuring how far a prediction is from the true label using an objective such as classification cross-entropy. |  |
| Backpropagation | 57 | Working backward through a neural network to calculate gradients describing how its parameters affect the training loss. |  |
| Weight Update | 57 | The optimizer's adjustment of model parameters using the computed gradients to reduce the training objective. |  |
| Hyperparameters | 58 | Externally selected training settings such as update step size, examples per batch, number of dataset passes and optimizer choice. |  |
| Training vs. Validation Performance | 60 | Comparing results on images used for parameter learning with results on held-out development images to diagnose underfitting, generalization or overfitting. |  |
| Improving Training | 61 | Ways to make learning more reliable, including realistic augmentation, constraints against overfitting and stopping based on validation results. |  |
| Regularization | 61 | Techniques that discourage overfitting, such as dropout and penalties on excessive weight magnitudes. |  |
| Early Stopping | 61 | Ending training when validation performance stops improving, normally retaining the best model instead of the final epoch's model. |  |
| Transfer Learning Workflow | 62 | Loading a pretrained model, replacing its output head, freezing existing layers, training the new head and optionally fine-tuning with a low learning rate. |  |

### Performance Assessment

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Performance Assessment | 65 | Assessing how well an image model performs its task, what errors it makes and how reliably it works on unseen examples. |  |
| Confusion Matrix | 66, 67, 68 | A table comparing predicted classes with actual classes that reveals correct predictions and the kinds of classification mistakes. |  |
| True Positive (TP) | 67, 68 | A classification outcome where the prediction is positive and the actual case is also positive. |  |
| True Negative (TN) | 67, 68 | A classification outcome where the prediction is negative and the actual case is also negative. |  |
| False Positive (FP) | 67, 68 | A classification outcome where the prediction is positive but the actual case is negative: a false alarm. |  |
| False Negative (FN) | 67, 68 | A classification outcome where the prediction is negative but the actual case is positive: a missed positive. |  |
| Evaluation Metrics | 71, 72 | Numerical measures used to assess classification behavior, including overall correctness, positive-prediction reliability, positive coverage and their balance. |  |
| Accuracy | 73, 74 | The fraction of all classification predictions that match the actual labels, counting both correctly identified positives and negatives. | Accuracy = (TP + TN) / (TP + TN + FP + FN). |
| Precision | 75, 76 | The fraction of predicted positive cases that are truly positive; this measures the reliability of positive predictions. | Precision = TP / (TP + FP). |
| Recall | 77, 78 | The fraction of actual positive cases that the classifier successfully identifies; this measures coverage of real positives. | Recall = TP / (TP + FN). |
| F1-Score | 79, 80 | The harmonic mean that balances precision and recall in one classification score. | F1 = 2PR / (P + R) = 2TP / (2TP + FP + FN). Undefined-denominator cases need an explicit convention. |
| Bias-Variance Tradeoff | 82, 83 | Balancing systematic error from an overly simple model against sensitivity to the training sample from an overly complex model. |  |
| High Bias / Underfitting | 84 | A model fitting problem associated with excessive simplicity or strong assumptions, causing poor performance on both training and new data. |  |
| High Variance / Overfitting | 85 | A model fitting problem associated with learning training-specific details too closely, giving strong training results but weak unseen-data results. |  |
| Good Generalization | 86 | Learning useful patterns that continue to produce good results on new examples rather than only memorizing training examples. |  |

### Application Integration and Testing

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Application Integration | 87 | Connecting a trained image model with user interfaces and software components so people can submit images and receive predictions. |  |
| Exporting the Trained Model | 88 | Saving a learned model in a loadable format so it can be integrated into another application or deployed. |  |
| Building a Front-End Interface | 89 | Creating the part of an ML application through which users submit inputs, interact with controls and understand prediction results. |  |
| Model Serving | 90 | Making the trained model available to receive application inputs and return inference results, often through an endpoint. |  |
| API Development | 90 | Creating a software interface and endpoints that let an application communicate with a prediction service. |  |
| Deployment Options | 91 | Choosing where the model runs: on a local computer, on cloud servers or near the data source on an edge device. |  |
| Integration Testing | 92 | Checking that the interface, API, model and returned predictions work together correctly as a complete system. |  |
| Performance Testing | 93 | Measuring operational behavior such as response time and how the system handles changing amounts of traffic. |  |
| User Acceptance Testing (UAT) | 94 | Checking with intended users whether the application meets their needs through tasks, observation, surveys or other feedback. |  |
| Monitoring and Maintenance | 95 | Tracking deployed behavior, fixing problems, improving the model and recording versions as updates are deployed. |  |

## Group 1 · Datasets & ML Workflow

Group 1 - Datasets and Machine Learning Workflow; Data Gathering and Preparation; Data Exploration and Visualization; Modeling and Prediction (1).pdf · 85 pages · SHA-256 c98e9e3df9be77b60811a54d592dc20f29e137daa7f45ad00142eafa9006d592

### Datasets and Machine Learning Workflow

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Dataset | 5 | An organized collection of observations or examples used for analysis, research or machine-learning development. |  |
| Dataset Structure | 6 | The arrangement of observations into rows and variables into columns, with input attributes distinguished from prediction targets. |  |
| Features and Labels | 6, 7, 8 | The distinction between the information supplied as model inputs and the target values the model is expected to predict. |  |
| Types of Data | 7 | The broad input categories listed for machine learning: numbers, categories, text, pictures and sequences collected over time. |  |
| Numerical Data | 7 | Values expressed as numbers, such as age, income, temperature or exam scores. |  |
| Categorical Data | 7 | Values identifying groups or classes, such as city, course or product type, rather than numerical measurements. |  |
| Text Data | 7 | Words or sentences used as input, such as reviews, emails or social-media posts. |  |
| Image Data | 7 | Pictures or visual information used as input, such as scans, faces or product photographs. |  |
| Time-Series Data | 7 | Observations recorded in time order, such as weather measurements, stock prices or daily sales. |  |
| Importance of Data in Machine Learning | 9 | The role of relevant, high-quality examples as the foundation for learning useful patterns and producing reliable predictions. |  |
| Machine Learning Workflow | 10 | An iterative development process that takes a problem through data work, modeling, evaluation, deployment and ongoing improvement. |  |
| Steps of Machine Learning Workflow | 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 | The ordered stages of defining the problem, collecting, preparing and exploring data, engineering features, splitting, training, evaluating, deploying and monitoring. | The deck's diagram uses a snake-shaped arrow order; the process can return to earlier stages. |
| Problem Definition | 11 | Clearly specifying the task to solve, the available inputs and the intended output before collecting data. |  |
| Data Collection | 12 | Gathering examples relevant to the defined task while considering accuracy, sufficient quantity and responsible sourcing. |  |
| Data Cleaning and Preparation | 13 | The workflow stage that resolves missing entries, duplicate or wrong values and unsuitable formats before modeling. |  |
| Data Exploration | 14 | The workflow stage that examines distributions, ranges, relationships and unusual examples to understand the collected dataset. |  |
| Feature Engineering | 15 | Selecting, transforming or creating input attributes that help a model learn useful patterns, such as deriving age from dates. |  |
| Dataset Splitting | 16 | The workflow stage that separates examples for parameter learning, development tuning and final evaluation. | The deck illustrates 70% training, 15% validation and 15% test; these are example ratios, not a universal requirement. |
| Model Training | 17 | The workflow stage where an algorithm uses training examples and prediction errors to fit the model's internal parameters. |  |
| Model Evaluation | 18 | The workflow stage that measures a fitted model with task-appropriate classification or regression metrics. |  |
| Model Deployment | 20 | Putting a tested model into actual use so it can receive new inputs and generate predictions. |  |
| Monitoring and Improvement | 21 | Checking deployed predictions, errors and changing data, then improving or retraining the model when necessary. |  |
| Overfitting | 19 | Learning training-specific details so closely that the model performs well on training examples but poorly on new ones. |  |
| Underfitting | 19 | Failing to learn useful patterns sufficiently, typically causing weak performance on both training and held-out examples. |  |

### Data Gathering and Preparation

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Data Gathering | 24 | The systematic acquisition of raw measurements, observations or facts from relevant sources to answer a question or solve a problem. |  |
| Sources of Data | 25, 26, 27, 28, 29 | Places or methods from which examples can be obtained, including firsthand collection, existing records, public collections, databases, APIs, websites, forms and sensors. |  |
| Primary Data | 26 | Information collected firsthand through surveys, interviews or direct observation for a specific purpose. |  |
| Secondary Data | 26 | Existing information originally collected by others, such as published reports, books or government records. |  |
| Types of Data Collection | 30, 31, 32 | The slide's classification of collection arrangements into predefined structure, flexible guided interviews and information without a fixed schema. |  |
| Structured Data | 31 | Collecting information using predefined formats, fixed questions or standardized categories that support consistent organization. |  |
| Semi-Structured Data | 31 | In this deck's collection discussion, using guiding interview questions while allowing unscripted follow-up questions. | The slide discusses semi-structured interviews. In data representation, “semi-structured” can instead mean tagged records with a flexible schema. |
| Unstructured Data | 32 | Files or information without a predefined data model, rigid schema or organized table format. |  |
| Data Quality Considerations | 33, 34, 35, 36 | The criteria for suitable collected examples: relevance, sufficient quantity, cleanliness, factual accuracy, completeness and reliability. |  |
| Relevance | 34 | How directly collected information addresses the problem or goal being studied. |  |
| Quantity | 34 | Having enough examples to observe meaningful patterns rather than relying on too little evidence. |  |
| Quality | 35 | The general cleanliness and suitability of examples, including freedom from unnecessary noise, duplicate entries and formatting errors. |  |
| Accuracy | 35 | The correctness of recorded values and labels compared with real-world facts. | This is data correctness, distinct from the classification-performance metric with the same name. |
| Completeness | 36 | The extent to which necessary information is present rather than missing important fields or observations. |  |
| Reliability | 36 | The consistency and trustworthiness of measurements or information when they are checked or measured again. |  |
| Data Preparation | 38 | Collecting, cleaning and transforming raw material into a consistent structured form suitable for analysis or modeling. |  |
| Data Cleaning | 39, 40, 41, 42 | Addressing blank fields, repeated records, invalid values, inconsistent formats, text mistakes and unusual observations. |  |
| Missing Values | 40 | Empty or unrecorded fields that may need removal, imputation or other handling before an algorithm can use the examples. |  |
| Duplicate Records | 40 | Repeated or redundant rows that can distort distributions and cause leakage if related copies appear in different data splits. |  |
| Incorrect Values | 41 | Invalid or logically impossible entries caused by mistakes or system problems that can mislead learning. |  |
| Inconsistent Formats | 41 | Different representations of the same kind of value that should be brought into a consistent format. |  |
| Typographical Errors | 42 | Spelling or capitalization mistakes that can cause equivalent text categories to be treated as different values. |  |
| Outliers | 42 | Observations lying unusually far from the main distribution that should be investigated before changing or removing them. | An extreme value may be a real event; being unusual does not automatically make it an error. |
| Handling Missing Data | 43, 44 | Choosing how to treat empty fields, such as removing suitable records or filling values with a mean, median, mode or another imputation method. | The deck gives less than 5% missingness as a removal guideline. It is a course heuristic, not a general guarantee; missingness patterns and information loss matter. |
| Data Transformation | 45, 46, 47, 48, 49 | Changing data values or representations through format conversion, numerical rescaling and conversion of categories to numeric inputs. |  |
| Scaling | 46 | Rescaling feature magnitudes to comparable or specified ranges so large numeric values do not dominate learning. |  |
| Normalization | 47 | In this deck, min-max rescaling of a numeric feature into a bounded range, commonly zero to one. | x_scaled = (x - min) / (max - min). Handle a constant feature separately. Fit scaling parameters on training data. |
| Standardization | 47 | Rescaling a numeric feature by subtracting its mean and dividing by its standard deviation. | z = (x - mean) / standard deviation. For nonconstant training features this gives mean 0 and standard deviation 1; it does not make the distribution Gaussian. |
| Encoding Categorical Data | 48 | Converting category names into numerical representations so algorithms can operate on the values. |  |
| Label Encoding | 49 | Assigning a distinct integer to each category name. | Integer codes can suggest an ordering to some models; choose encoding appropriate to the data and model. |
| One-Hot Encoding | 49 | Creating a separate zero-or-one indicator column for each category to represent membership without a numeric rank. |  |
| Feature Selection | 50 | Keeping relevant input variables and removing unnecessary or redundant ones to reduce complexity and improve learning. |  |
| Data Splitting | 51, 52 | Dividing prepared examples into learning, development-validation and final-evaluation subsets with different roles. |  |

### Data Exploration and Visualization

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Data Exploration | 56 | Initially inspecting the dataset to understand its structure, useful patterns and possible problems. |  |
| Data Visualization | 57 | Representing information with charts, graphs, plots or dashboards to make patterns and results easier to interpret. |  |
| Exploratory Data Analysis (EDA) | 58 | Using exploratory statistical summaries and plots to investigate distributions, relationships, errors and relevant features before modeling. |  |
| Types of EDA | 59 | The three broad exploratory-analysis levels: examining one variable, two variables or several variables together. |  |
| Univariate Analysis | 60 | Examining one variable at a time to describe its values, characteristics and distribution. |  |
| Bivariate Analysis | 66 | Examining two variables together to investigate how they are related or change together. |  |
| Multivariate Analysis | 71 | Examining three or more variables together to investigate more complex relationships and patterns. |  |
| Histograms | 62 | Plots that group continuous numeric observations into intervals and show how often values occur within those bins. |  |
| Bar Graphs | 63 | Plots using rectangular bars to compare counts or values for separate categories, with bars drawn vertically or horizontally. |  |
| Box Plots | 65 | Plots summarizing a numeric distribution with a median, quartiles, whiskers and possible outlier markers. | The slide illustrates minimum/maximum whiskers. Other conventions, such as Tukey's 1.5-IQR rule, use different whisker endpoints. |
| Scatter Plots | 68 | Plots where each point represents paired numeric values, helping visualize the relationship between two variables. |  |
| Correlation | 69 | A measure of the direction and strength of association between variables; the Pearson coefficient ranges from -1 to +1. | For Pearson correlation, zero means no linear association, not necessarily no relationship. Association alone does not establish causation. |
| Cross-Tabulation | 69 | A table of counts for combinations of categorical values, enabling comparisons across two or more categories. |  |
| Line Graphs | 70 | Plots that connect ordered observations with line segments to show changes or trends, commonly over time. |  |
| Covariance | 70 | A measure of how two numeric variables vary together, with a positive sign for joint movement and a negative sign for opposite movement. |  |
| Pair Plots | 72 | A grid of plots comparing pairs of numerical variables, often with each variable's distribution shown on the diagonal. |  |
| Spatial Analysis | 72 | Examining geographically referenced information to find patterns, relationships or trends associated with location. |  |
| Principal Component Analysis (PCA) | 72 | A dimension-reduction technique that projects correlated features into fewer uncorrelated components preserving major variation. |  |

### Modeling and Prediction

| Term | Verified PDF pages | Definition | Note |
|---|---|---|---|
| Machine Learning Model | 74 | A fitted computational system that uses patterns learned from examples to recognize structure or produce predictions. |  |
| Model Training | 75 | Feeding examples to a learning algorithm so it can fit internal parameters for a task such as classification or regression. |  |
| Machine Learning Algorithms | 77, 78, 79, 80, 81 | Procedures for learning patterns or behavior, introduced through supervised, unsupervised, semi-supervised and reinforcement approaches. |  |
| Types of Machine Learning | 77, 78, 79, 80, 81 | The broad learning approaches distinguished by known targets, unlabeled structure, mixed labeled/unlabeled examples or environmental rewards. |  |
| Supervised Learning | 78 | Learning from examples with known target outputs so the model can predict outputs for new inputs. |  |
| Unsupervised Learning | 79 | Learning structure or patterns from examples without predefined target labels. |  |
| Semi-Supervised Learning | 80 | Learning with both labeled and unlabeled examples, often using a small labeled portion together with a larger unlabeled portion. |  |
| Reinforcement Learning | 81 | Learning sequential decisions by interacting with an environment and using rewards or penalties to improve cumulative reward. | The standard term is Reinforcement Learning; the slides use “Reinforced Learning.” |
| Classification | 78 | Predicting a discrete category or class label, rather than a continuous numerical target. |  |
| Regression | 78 | Predicting a continuous numerical target, such as a price, temperature or expected grade. |  |
| Clustering | 79 | Grouping similar unlabeled examples according to their relationships or shared characteristics. |  |
| Dimensionality Reduction | 79 | Reducing the number of input dimensions while preserving useful structure or information. |  |
| Association Rule Learning | 79 | Discovering co-occurrence relationships between items or variables, such as items frequently purchased together. |  |
| Training a Model | 75, 82 | Using a learning algorithm and input features to fit a predictive model before applying it to new examples. | Page 82 is mainly an input-to-prediction diagram. Known target labels are used for supervised fitting, but an unknown target must not be included as an input at inference time. |
| Prediction | 83 | Applying an already trained model to new input examples to estimate their outputs from learned relationships. |  |
| Model Evaluation | 84 | Assessing predictive performance with measures chosen for classification or continuous-value prediction. |  |
| Classification Metrics | 84 | Measures for category predictions, such as accuracy, precision, recall, F1 and a table of predicted-versus-actual categories. |  |
| Regression Metrics | 84 | Measures for numerical predictions, including mean absolute error, mean squared error, its square root and the coefficient of determination. | MAE averages absolute errors; MSE averages squared errors; RMSE = sqrt(MSE). R² can be negative on poorly predicted held-out data; it is not always limited to 0–1. |

