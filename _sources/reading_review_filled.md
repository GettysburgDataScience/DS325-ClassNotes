# Reading Assignments Review

## 1. HOML Ch 1 (p 3-37), Ch 4 (p 131-148)

 1. **Give two examples of supervised learning tasks:** (p 10)
    - Regression
    - Classification
 2. **Give two examples of unsupervised learning tasks:** (p 11)
    - Clustering
    - Dimensionality Reduction
 3. **Briefly explain the roles of training, validation, and test sets in developing a machine learning model.** (p 10, p 34-37)
    - training - We use the training set to find the parameters of the model
    - validation - We use a validation set to select between different candidate models. Candidate models may be of different learning algorithms (e.g. linear regression vs decision tree regression) or variations of the same learning algorithm (different hyper-parameters). We split the training set into a smaller training set and a validation set (using train_test_split for example). We select the model that performs best on the validation set(s).
    - testing - We use the testing set to evaluate the performance of the model on 'unseen' data (an indication of how the model will perform in the wild)

 4. **What are parameters and hyper-parameters of a machine learning model?** (p 32)
    - parameters - these are the unknown variables that are fit during training (e.g. the weights and bias in linear regression)
    - hyper-parameters - these are parameters of the learning algorithm, set by the user before training the model

 5. **What is linear regression?** (p 132)
    - Regression is a family of methods for predicting a continuous valued target from data. Linear regression assumes that the relationship between the target and the features is linear, that is, y = bias + weight * x.


## 2. HOML Ch 4 (p 148-173)

1. **Briefly define bias and variance.** (p 155)
    - Bias - Errors that come from bad assumptions in our model. Bias manifests as larger error (residuals) in your training set. Bias often results from under-fitting the data.
    - Variance - Errors that arise from fitting noise or variation in a particular training set. If the model is too specific (too many parameters), the values of the parameters will change significantly depending on the training data. Variance often results from over-fitting the data (a model with too many parameters).

2. **What is regularization and why do we use it?** (p 32, p 155)
    - A technique to prevent over-fitting of a machine learning model.

3. **List three flavors of regression that use regularization.** (p 156-161)
    - Ridge Regression
    - Lasso Regression
    - Elastic Net Regression

4. **What is a cost function? What cost functions are typically used for linear and logistic regression?** (p134, p165)
    A cost function is how we penalize residuals between predicted and actual values. We use cost functions to select the "best" fit model.
    - Linear - Mean Squared Error
    - Logistic - Log Loss

5. **What does a Softmax regression tell us?** (p 170)
    - Softmax regression allows for multi-class logistic regression and tells us the probability of a data point belonging to one of several classes.