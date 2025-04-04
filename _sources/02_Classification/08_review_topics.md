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



