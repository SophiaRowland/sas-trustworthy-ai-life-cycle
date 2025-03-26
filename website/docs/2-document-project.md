---
sidebar_position: 3
---

# 2. Document project
The following documentation helps define the project in a centralized location. 

## 2.1 Model owner prepares documentation

### 2.1.1 Document the current state of the project
**Model owner**: Document the current state of the project. 

* [ ] Not started
* [x] In progress
* [ ] In production
* [ ] Depreciated or archived

If applicable, add any additional details: 
> Project documentation in progress. Weekly stakeholder meetings scheduled. 

### 2.1.2 Document purpose and usage
**Model owner**: Document the purpose of the modeling project, including model usage, scope, assumptions, limitations, and potential benefits and harms in accordance with the *NIST AI RMF Playbook* guidelines in Map [1.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%201.1), [3.2](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%203.2), and [3.3](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%203.3).

> This project aims to reduce risk and decrease costs for our future loan portfolio. The machine learning model will predict an applicant's probabilty of default after their application is submitted. With this probability and other characteristics about the borrower, the AI system will determine to accept or decline the loan, what terms to offer, and if declined, provide an actionable explaination. We assume that the past data about our loan applicants can be used to determine risk and probabilities of default for future borrowers. We do not know if those whose loans were declined in the past would have defaulted or paid their loan in full. 

### 2.1.3 Document end users
**Model owner**: Document end users and their expected usage in accordance with the *NIST AI RMF Playbook* guidelines in Map [1.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%201.1).

> End users will be loan applicants using our website to apply. 

### 2.1.4 Document baseline metrics
**Model owner**: Document the baseline metrics or processes used to measure the success of the current decisioning system.
A decisioning system can be a model, a database, or a process of communication and knowledge sharing.
Consult the *NIST AI RMF Playbook* guidelines in Map [3.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%203.1).

> As of March 2025, 10% of our borrowers defaault on their loan within 12 months, costing on average $50,000 in losses each year. 

### 2.1.5 Document feedback strategy
**Model owner**: Document the feedback strategy.
The strategy should outline how users of the AI system will provide feedback to developers and deployers of the AI system in accordance to the *NIST AI RMF Playbook* guidelines in Map [5.2](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%205.2).

> After the applicant is delivered their decision, there will be a link to report a problem. Users can use this link to appeal the system's decision or ask for a manual review.  

### 2.1.6 Document performance metrics
**Model owner**: Document preferred performance metrics, including fit statistics.
Fit statistics are statistical values that assess how well a model fits a set of data.
Metrics are used to evaluate model performance.

> False Positive Rate
> Misclassification Rate
> F1 Score
> Decline Rate
> Montly Portfolio Revenue. 


### 2.1.7 Approve documentation?
**Model owner**: Review and confirm your documentation.

Did you provide all necessary documentation?

* [x] Yes
* [ ] No

If the answer is no, please list what is missing and re-assign [step 2.1](#21-model-owner-prepares-documentation) to yourself for completion.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

## 2.2 Model risk owner prepares documentation

### 2.2.1 Document potential negative impacts
**Model risk owner**: Document the model's potential negative impacts, costs, and legal risks in accordance with the *NIST AI RMF Playbook* guidelines in Map [1.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%201.1), Map [4.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%204.1), and Measure [3.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Measure#Measure%203.1).
Negative impacts include potential reduction in the well-being or financial security of individuals, communities, organizations, society, and the planet.
Legal risks might include risks of infringement for a third party's intellectual property or other rights.

> Revenue losses if good borrowers are declined.
> Increased costs if bad borrowers are approved. 
> Reputational risks if our model is biases. 
> Potential PII leak if data is not properly secured. 


### 2.2.2 Document organizational risk tolerance
**Model risk owner**: Document the organization's risk tolerance and criteria for action in accordance with the *NIST AI RMF Playbook* guidelines in Map [3.2](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%203.2).
Risk tolerance defines how acceptable various types of risk are according to the organization's goals and strategy.
Risk types include financial risk, reputational risk, and potential harm to individuals present within the data or subject to the AI system.
Criteria for action describe thresholds or events that would lead to an organization taking risk management measures, including changes to the model or the decision to deploy the model.

> Our current default rate is too high and exceeds industory average! We need to do something fast. 

### 2.2.3 Approve documentation?
**Model owner**: Review documentation supplied by the model risk owner.

Did the model risk owner provide all necessary documentation?

* [ ] Yes
* [x] No

If the answer is no, please list what is missing and re-assign [step 2.2](#22-model-risk-owner-prepares-documentation) to the model risk owner for completion.

> Please provide metrics and measures for risk tolerance. 

## 2.3 Model engineer prepares documentation

### 2.3.1 Document processes
**Model engineer**: Document data processes throughout the AI life cycle.
This could include how data is prepared to be passed to the AI system, how data is passed to the system, and how the output is returned and used by other systems in accordance with the *NIST AI RMF Playbook* guidelines in Map [1.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%201.1) and [1.2](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%201.2).

> Data from the application form in the website is sent in parallel to the applicant database and to the model via REST API. The AI system will spit out an answer that will return to the website via REST API and shown to the user. The answer will be written back to the database with the user's application data. 

### 2.3.2 Document the deployment location
**Model engineer**: Document the deployment location and all external connections.

> The model and decisioning logic will be deployed within a container to the Azure Kubernetes Service, where we will leverage autoscaling to meet traffic needs. Data will be stored in our Azure Data Lake. Data to be scored will be sent to the model via REST API. 

### 2.3.3 Approve documentation?
**Model owner**: Review documentation supplied by the model engineer.

Did the model engineer provide all necessary documentation?

* [x] Yes
* [ ] No

If the answer is no, please list what is missing and re-assign [step 2.3](#23-model-engineer-prepares-documentation) to the model engineer for completion.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

## 2.4 Data engineer prepares documentation

### 2.4.1 Document bias assessment variables
**Data engineer**: Document variables that will be used to identify or assess bias in the data or models. Bias assessment variables help identify unacceptable, and systematic differences between subpopulations.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.4.2 Document the time period covered
**Data engineer**: Document the time period covered for both the collection and creation of the data.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.4.3 Document data limitations
**Data engineer**: Document any known limitations of the data, including issues arising during data collection, selection, labeling, cleaning, and analysis, in accordance with the *NIST AI RMF Playbook* guidelines in Map
[2.3](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%202.3).

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.4.4 Document private variables
**Data engineer**: Document variables that might be considered private according to organizational guidelines and applicable regulations.
Consider whether the unintended use of private data might expose people to harm or legal action and document a mitigation strategy in accordance with the *NIST AI RMF Playbook* guidelines in Measure [2.10](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Measure#Measure%202.10).

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.4.5 Approve documentation?
**Model owner**: Review documentation supplied by the data engineer.

Did the data engineer provide all necessary documentation?

* [ ] Yes
* [ ] No

If the answer is no, please list what is missing and re-assign [step 2.4](#24-data-engineer-prepares-documentation) to the data engineer for completion.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>


## 2.5 Model developer or data engineer prepares documentation

### 2.5.1 Document metadata
**Model developer or data engineer**: Document model and project metadata, including the name of the model owner, timestamps, statistical analysis tools and the version used, model performance at training time, and any other relevant information.
This information is automatically compiled for models developed in Model Studio but can be compiled via sasctl packages for Python or R models or macros for SAS code models.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.5.2 Document testing strategy
**Model developer or data engineer**: Document the model testing strategy in
accordance with the *NIST AI RMF Playbook* guidelines in Measure
[1.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Measure#Measure%201.1).
Consider the following questions when developing the testing strategy.
Note that answers to the questions do not need to be explicitly documented in the testing strategy.
Rather, the questions can guide the development of the strategy itself, which should be documented in this step.

1. Are there systemic differences between the data that you use to train the model, the data that you use to test the model, and the data about the population or setting into which the AI system will be deployed?

   Such differences could be related to any of the following:
   - representativeness
   - missing data
   - input data distributions
   - output data distributions
  
2. Should the model be tested in out-of-distribution samples?
3. How does the model behave when encountering values not included in the training data? 
4. Are training and testing samples independent? What method was used to create the training and testing data sets?

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.5.3 Document thresholds
**Model developer or data engineer**: Document threshold values for the preferred model performance metric.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.5.4 Document protected classes
**Model developer or data engineer**: Document relevant protected classes and their expected proportions among individuals impacted by the AI system in accordance with the *NIST AI RMF Playbook* guidelines in Map
[5.1](https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Map#Map%205.1).
Protected classes are groups of people who are legally protected from discrimination based on a shared characteristic.
Classes can include age, ancestry, disability, ethnicity, gender, gender identity or expression, genetic information, HIV/AIDS status, military status, national origin, pregnancy, race, religion, sex, sexual orientation, and veteran status.
Legally defined protected classes can vary by country or region.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>

### 2.5.5 Approve documentation?
**Model owner**: Review documentation that was supplied by the model developer or data engineer.

Did the model developer or data engineer provide all necessary documentation?

* [ ] Yes
* [ ] No

If the answer is no, please list what is missing and re-assign [step 2.5](#25-model-developer-or-data-engineer-prepares-documentation) to the model developer or data engineer for completion.

> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
> <br></br>
