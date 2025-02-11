# Reading Assignments Review

## 1. HOML Ch 1 (p 3-37), Ch 4 (p 131-148)

 1. **Give two examples of supervised learning tasks:** (p 10)
    - Regression
    - Classification
 2. **Give two examples of unsupervised learning tasks:** (p 11)
    - Clustering
    - Anamoly detection
    - Dimensionality reduction
 3. **Briefly explain the roles of training, validation, and test sets in developing a machine learning model.** (p 10, p 34-37)
    - training - The data set used to train the model (ie. find the optimized parameters).
    - validation - The validation set is a subset of the training data (we can use train_test_split for example) used to compare performance of candidate models to select a model.
    - testing - Separate data set of 'unseen' data used to evaluate performance of the model. This gives an idea of how the model will perform in the wild.

 4. **What are parameters and hyper-parameters of a machine learning model?** (p 32)
    - parameters - variables of the model that are optimized during training/fitting.
    - hyper-parameters - variables of the learning algorithm that we choose before training (e.g. for a Decision Tree, hyper-parameters include max_depth, purity function, min points per leaf, etc.)

 5. **What is linear regression?** (p 132)
    - Regression refers to machine learning algorithms that map the features to a continuous-valued (as opposed to discrete categories) target. Linear regression assumes a linear relationship between the features and the target, that is the parameters are a bias ($\theta_0$) and a weight for each feature ($\theta_n$).

    $ y = \theta_0 + \theta_1 \cdot x_1 + \theta_2 \cdot x_2 + \cdots \theta_n \cdot x_n$



## 2. HOML Ch 4 (p 148-173)

1. **Briefly define bias and variance.** (p 155)
    - Bias - error that results from fitting the wrong kind of model or an inadequate model to the data. Generally, too simple a model cannot capture the important trends in the data. This can be observed in that your model will do a poor job fitting the training data.
    - Variance - error that results from over-sensitivity to variation in the training data. That is given different training sets (subsets of the same data), the best-fit model parameters will be very different. This can be observed in a model that fits the training set very well, but performs significantly worse on the test set.

2. **What is regularization and why do we use it?** (p 32, p 155)
    - Regularization describes a bunch of techniques that constrain models to be simpler. We use regularization to prevent over-fitting.

3. **List three flavors of regression that use regularization.** (p 156-161)
    - Ridge Regression - penalizes the size of parameters
    - Lasso Regression - penalizes the number parameters
    - Elastic Net Regression - a bit of both Ridge and Lasso penalties

4. **What is a cost function? What cost functions are typically used for linear and logistic regression?** (p134, p165)

    A cost function is a penalty on the residuals between our data and our model predictions. We use a cost function to optimize the parameters of our model (optimized to minimize the value of the cost function).

    - Linear - Mean Squared Error
    - Logistic - Log Loss

5. **What does a Softmax regression tell us?** (p 170)
    - Softmax is a variation of logistic regression. It can be used for multi-class classification and tells us the probability of a data point belonging to each candidate category.