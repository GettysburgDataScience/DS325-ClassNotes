# Classification Topics - Exam 2 Review

## General
 - What is classification? How is it different than regression?
 - Examples of classification.
 - Predictions and prediction errors
    - TP, FP, TN, FN
    - Type I (FP) and Type II (FN) errors
 - Accuracy, Recall, Precision (I will provide equations, but know what these mean)
 - Confusion Matrix

## Learning Algorithms for Classification

**Logistic Regression**
 - Why is it regression?
 - How does it relate to Linear Regression?
 - What are the parameters of Logistic Regression?
 - How can you regularize Logistic Regression? What are some hyper-parameters? Ridge, Lasso, ElasticNet

**Decision Trees**
 - Anatomy of a tree: root, decision, and leaf nodes, branches
 - How to read the results of a tree? e.g. given a tree with the sample data at each node, calculate accuracy.
 - Parameters? What kind of 'questions' can be at a node. 
 - hyper-parameters? over- and under-fitting

**Ensemble Methods**
 - How can ensembles of weak learners (small trees) be better than one big decision tree?
 - Bias vs Variance
  - Random forest - low variance, ? bias
  - Gradient Boosted Trees - high variance, low bias

***Random Forest***
 - What is it? What are some hyper-parameters?
 - Basic overview of what happens in training.
 - Bagging (Bootstrapping/Aggregation)
 - Hard vs soft voting

***Gradient Boosted Trees***
 - What is it? When to use?
 - Basic overview of what happens in training.
 - How is it different from Random Forest?

**K-Nearest Neighbors (KNN)**
 - What is it? How does it work?
 - What are the parameters? (None) What are the hyper-parameters?
 - Neighborhood size (over- and under-fitting)

## Clustering

**K-Means**
 - When would we use it? How does it relate to classification?
 - Unsupervised learning
 - How to find correct number of clusters? Silhouette score.

## Pre-processing

**Scaling**
 - StandardScaler, MinMaxScaler
 - Which algorithms require that features be scaled?
  - basically, just tree methods don't need it
 - What could happen if you forget to scale?

**Encoding**
 - When to use encoding
 - Ordinal vs categorical vs numeric features
 - One-hot vs Ordinal vs Label encoding

## Other Topics

**Grid search**
 - what is it and why do we use it?

**Cross validation**
 - Why do we use validation?
 - What is k-fold cross validation/how does it work?

**Principle Component Analysis (PCA)**
 - Why do we use it? Benefits?
 - What is a principle component (PC) and how are they ordered.



# Practice Questions (from students and some from Prof Roth)

***"Easy"***
What is the difference between classification and clustering?

Which of the following is an example of ordinal discrete data?
    a.  'faculty', 'staff', 'students'
    b.  'high', 'low', 'medium', 'very high', 'very low'
    c.  1, 2.32, 2.98, 4.16, 7.73, 8.54
    d.  'data science', 'math', 'statistics', 'sociology'
    e.  none of the above

 What models can be used for multi-class prediction?
 a. Random Forest
 b. Logistic Regression
 c. Decision Tree
 d. A and B
 e. all of the above

***"Medium"***
In KNN, what happens if you set the K value of your model too low?
 a. the code won't run
 b. the model will under-fit the data
 c. the model will over-fit the data
 d. the model will predict mostly incorrect labels
 e. none of the above

How does KNN make a prediction?

If a decision tree is overfitting, which of the following might fix the issue?
 a. increasing the max_depth hyper-parameter
 b. decreasing the max_depth hyper-parameter
 c. using a larger training data set
 d. applying Ridge regularization
 e. none of the above

Suppose you develop a classifier that detects mechanical faults in bridges based on a set of sensor measurements. Which classification metric is most applicable to this problem?

***"Hard"***

Why/when is it recommended to apply StandardScaler before applying PCA?
 a. PCA does not handle integer values.
 b. to ensure features with large numeric ranges do not dominate the principal components
 c. normalizing data reduces run-time of PCA
 d. normalization should be used only when there are significant outliers.
 e. none of the above

Why can Euclidean distance become unreliable as the number of dimensions/features increase?
 a. Euclidean distance becomes negative in high dimensions
 b. all points become nearly equidistant from eachother
 c. the algorithm requires more labeled data in high dimensions
 d. irrelevant features dominate the distance calculation
 e. none of the above


You are optimizing a decision tree using GridSearchCV with 5-fold cross validation. You define the following parameter candidates.

    max_depth = [3, 6, 9]
    min_samples = [5, 10]

How many times are models fit for this search?
a. 5
b. 6
c. 25
d. 30
e. 150

Which of the following is TRUE regarding K-Means Clustering?
a. K-means always converges to the globally optimal solution
b. The algorithm performs well on non-linearly separable or arbitrarily shaped clusters
c. Increasing K generally improves fit
d. K-means struggles with clusters of varying densities and sizes, potentially leading to poor clustering results
e. None of the above
