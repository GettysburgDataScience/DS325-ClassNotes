# Final Project

## Guidelines
 - Teams of 2-4. NO INDIVIDUALS (teamwork makes the dream work...even if that dream is a nightmare.)
 - Your data must be verifiably real. You are permitted to use data from Kaggle, but I warn you that many datasets on Kaggle are synthetic but not explicitly identified as such.
 - At submission time, you will be asked to enumerate your own and your collaborators' contributions to the project.

## Deliverables
 - Due Wednesday Nov 19, 2025 by classtime
    - Group members
    - Thesis topic
    - Data source
 - Due Thursday December 4, 2025 by 9a (so really the night before, but I don't care how late)
    - Report
        - 2000 word max
        - At least 2 figures
        - At least 1 model
        - PROOFREAD. The report should be well-written and reasonably free of typos and grammatical mistakes. Choose formatting that makes it easy to follow. For example, use lists, tables, figures if those communicate an idea more effectively.
    
    - Notebook (.ipynb)
        - Provide all the code data cleaning, analysis, and visualization.
        - Code should be broken into sections with markdown cells explaining what's to come.
        - Code should be commented as needed.
        - Remove unnecessary code blocks and make sure all your code runs correctly without error. Take the care to make the code nice as you would a report or presentation.
        
    - Data
        - Provide any data (or links to the data) so that code runs correctly.
        - Cite the source of your data in your report.
        - Data should be the most recent data you can find for your topic.

 - Due Tuesday December 9, 2025 at 9a
    - Presentation during final exam period
        - 10-15 minute presentation (including questions)
        - The format of your presentation is up to you. You can prepare a traditional slideshow, lead an activity/discussion, perform a play, create a poster and take Q&A etc.


### More on the report

There is no required format for the report in terms of what sections must be present. Below I'm providing an outline common to academic writing, providing suggestions of sections and their purposes. Feel free to deviate from this format.

- **Abstract**
    - a one paragraph summary of your report
    - the abstract briefly describes your question, the methods you used, and your findings/conclusions.

- **Introduction**
    - Provide some background to your question (broad to narrow)
    - What is your thesis?
    - Why should the reader care?
    - Summarize how you are going to convince the reader of your thesis.

- **Methods**
    - Describe the technical approach you used to support your thesis.
    - This should not be a line-by-line description of your code.
    - In describing how you processed and modeled your data, use standard English names not the Python function names
        - We apply a one-hot encoder to convert the categorical features into numerical values, then fit a random forest model to the encoded data. 
        - We apply OneHotEncoder to the categorical features, then create a RandomForestClassifier() and use rf.fit() on the training data.

- **Results**
    - This is where your figures go and any stats or model assessments.
    - You are not interpreting results in this section.
    - Figures should be labeled, annotated, highlighted, etc to point out the important trend/pattern you want the reader to see. Every figure should be numbered and have a caption.
        - For nicer formatting, I recommend placing figures into tables within the text.

- **Discussion**
    - THIS IS THE MOST IMPORTANT SECTION
    - Interpret your results. How do your results support your thesis? Support your claim in multiple ways.
    - What should the reader pay attention to in the figures.
    - Point out any caveats or counter-arguments. You should have thought of them or discovered them along the way.
    - Discuss any future work that could improve your current analysis.

- **Citations**
    - If you don't cite your sources, you are plagiarizing.
    - Cite your sources and **any use of generative AI**. Citation guidelines can be found on the library website ([traditional sources](https://libguides.gettysburg.edu/citation), [genAI](https://libguides.gettysburg.edu/citation/gen-ai))