<div class="divSummary">
<h2 class="verticalText">Summary</h2>
<ul class="summary">
    <li><a href="#introduction">Introduction</a>
    </li>
    <li><a href="#colab-1">Collaborative Learning Discussion 1</a>
        <ul class="sect">
            <li><a href="#colab-11">Peer feedback</a></li>
            <li><a href="#colab-12">Summary post</a></li>
        </ul>
    </li>
    <li><a href="#unit2-seminar-prep">Unit 2 Seminar Preparation</a>
    </li>
    <li><a href="#unit3-activity">Unit 3 Activity</a>
    </li>
    <li><a href="#unit4-seminar-prep">Unit 4 Seminar Preparation</a>
    </li>
    <li><a href="#unit5-wiki-activity">Wiki Activity</a>
    </li>
    <li><a href="#unit5-jaccard-coef">Jaccard Coefficient Calculations</a>
    </li>
    <li><a href="#unit6-seminar-prep">Unit 6 Seminar Preparation</a>
    </li>
    <li><a href="#development-team-project">Development Team Project: Project Report</a>
    </li>
    <li><a href="#reflective-piece1">Mid-Module Reflective Piece</a>
    </li>
    <li><a href="#unit7-perceptron">Perceptron Activities<a>
    <li><a href="#colab-2">Collaborative Learning Discussion 2</a>
        <ul class="sect">
            <li><a href="#colab-21">Peer feedback</a></li>
            <li><a href="#colab-22">Summary post</a></li>
        </ul>
    </li>
    <li><a href="#unit8-gradient-descent">Gradient Cost Function<a>
    </li>
    <li><a href="#unit9-cnn">CNN Model Activity<a>
    </li>
    <li><a href="#unit11-performance">Model Performance Measurement<a>
    </li>
    <li><a href="#final-project">Individual Presentation<a>
    </li>
    <li><a href="#reflective-piece2">Final Reflective Piece<a>
    </li>
</div>

<main class="summaryContent">
<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        <h2 id="introduction">Introduction</h2>
            <p>With Dr. Stelios Sotiriadis as our tutor, the "Intelligent Agents" module introduced students to intelligent agents and its various interconnected applications, such as first-order logic, agent-based modelling, and natural language processing (NLP). It placed an emphasis on uniting the theoretical and practical components of intelligent agent systems while stimulating critical thinking and fostering collaboration, promoting an environment where students had to work together to tackle its diverse activities.</p><br><br>


        <h2 id="colab-1">Collaborative Learning Discussion 1</h2>
            <p>The first collaborative learning discussion served as a way for students to warm up to the module by discussing about agent-based systems. For it, we had the following topic to elaborate on:<br><br>
            
            "<i>Discuss what has led to the rise of agent-based systems and the benefits that this approach can offer to organisations. Discussion should include at least three references."</i><br><br>

            Students were required to create an initial post and, then, address at least 3 of their peers' submissions before creating a summary post. This final entry would serve as an evolved version of a student's initial post, incorporating peer responses and directly addressing them by either agreeing or not and providing the reasons for either case. My initial post, "The Interdisciplinary Role of Agent-Based Systems", was as follows:<br><br>
            
            <center><img src="img/intelligent_agents/initial_post.png" height="600" width="1200"><br>

            <font size="2">Figure 1: My initial post in the first collaborative learning discussion forum</font></center></p><br><br>

            
            <h3 id="colab-11"><br>Peer feedback</h3>
                <p>The peer responses from Natali Nikolic, Yuji Watanabe and Stuart Gibb, three of my peers, were instrumental in building upon my initial post. For Natali, her response was as follows.<br><br>
                
                <center><img src="img/machine_learning/natali_disc1.png" height="550" width="1100"><br>

                <font size="2">Figure 2: Natali's peer response to my initial post</font></center><br><br>

                As for Yuji, his response was the following:<br><br><br>

                <center><img src="img/machine_learning/yuji_disc1.png" height="500" width="1100"><br>
                
                <font size="2">Figure 3: Yuji's peer response to my initial post</font></center><br><br>
                
                Finally, for Stuart, his response was the following:<br><br><br>

                <center><img src="img/machine_learning/stuart_disc1.png" height="600" width="1100"><br>
                
                <font size="2">Figure 4: Stuart's peer response to my initial post</font></center></p><br><br>


            <h3 id="colab-12"><br>Summary post</h3>
                <p>My initial entry was significantly enhanced by my peers' feedback. Their comments were addressed by my summary post, which was as follows:<br><br>

                <center><img src="img/machine_learning/summary_post_disc1.png" height="600" width="1100"><br>
                
                <font size="2">Figure 5: My summary post in the first discussion forum</font></center></p><br><br>


        <h2 id="unit2-seminar-prep"><br>Unit 2 Seminar Preparation</h2>
            <p>The second seminar consisted of an introduction to exploratory data analysis (EDA). To prepare us for it, the preparatory task consisted of exploring the <a href="https://www.kaggle.com/datasets/uciml/autompg-dataset/data">auto-mpg</a> dataset and using the following topics as a guide:<br><br>

            <i>
            a) Identify missing values;<br>
            b) Estimate skewness and kurtosis;<br>
            c) Correlation heat map;<br>
            d) Scatter plot for different parameters;<br>
            e) Replace categorical values with numerical ones (i.e., America 1, Europe 2 etc.).</i><br><br>
            
            Taking an initial look at the dataset revealed that one of the columns, <i>horsepower</i>, had question marks scattered throughout it, essentially counting as missing values. I proceeded to identify and correct this in the following manner:<br><br>
            
            <center><img src="img/machine_learning/auto_mpg_missing_values.png" height="600" width="700"><br>

            <font size="2">Figure 6: Treating the missing values in the <i>horsepower</i> column</font></center><br><br>

            Afterwards, I proceeded to estimate the skewness and kurtosis of the dataset's numerical columns through an unbiased estimator for both, which I did in the following manner:<br><br>
            
            <center><img src="img/machine_learning/skewness_and_kurtosis.png" height="600" width="600"><br>

            <font size="2">Figure 7: Calculating skewness and kurtosis for the dataset's numerical columns</font></center><br><br>

            Moving on to the third topic, I verified, in a visual manner, if the data followed a normal distribution before computing the correlation, with the results being as follows:<br><br>
            
            <center><img src="img/machine_learning/data_distribution.png" height="500" width="700"><br>

            <font size="2">Figure 8: The overall distribution of the dataset, produced with <i>Seaborn</i></font></center><br><br>
            
            As the results implied that the data was right-skewed, Pearson's correlation coefficient would not be suitable here. As such, I proceeded to use Spearman's rank correlation, with the results being as follows:<br><br>

            <center><img src="img/machine_learning/correlation_plot.png" height="600" width="700"><br>

            <font size="2">Figure 9: A correlation plot of the dataset's variables (columns), produced with <i>Seaborn</i></font></center><br><br> 
            
            This correlation plot shows some interesting relationships, such as the strong positive correlation between horsepower and displacement, displacement and weight and weight and cylinders. It also shows that the correlation for weight and MPG, for instance, is strongly negative.<br><br>

            Subsequently, I tackled the fourth topic by producing a pairplot for all columns in the dataset. The results were as follows:<br><br>

            <center><img src="img/machine_learning/pairwise_plot.png" height="700" width="1000"><br>

            <font size="2">Figure 10: The pairwise plot of all variables, produced with <i>Seaborn</i></font></center><br><br> 

            For the fifth and last topic, I noticed that the only column that did not use numerical values was <i>car name</i>. As such, I proceeded to convert it to the proper format, which produced the following results:<br><br>

            <center><img src="img/machine_learning/categorical_to_numerical.png" height="300" width="700"><br>

            <font size="2">Figure 11: The categorical to numerical conversion in the <i>car name</i> column</font></center></p><br><br>


        <h2 id="unit3-activity"><br>Unit 3 Activity</h2>
            <p>The unit 3 activity consisted of running three separate Jupyter notebooks and changing their numerical values to ascertain the impact that such actions have on correlation and regression.<br><br>
            
            In the first notebook, which included covariance and Pearson's correlation coefficient, I decided to focus on the first constant value in the <i>data1</i> equation (20). Changing it to 40 results in both the covariance and correlation increasing from 389.755 and 0.888 to 873.632 and 0.945, respectively, as shown in the example below:<br><br>
            
            <center><img src="img/machine_learning/unit_3_cov_cor_increase.png" height="550" width="600"><br>

            <font size="2">Figure 12: The resulting covariance and correlation after increasing a constant value from 20 to 40</font></center><br><br>  

            Conversely, decreasing the value resulted in smaller covariance and correlation values.<br><br>

            For the second notebook, which included Pearson's correlation coefficient and a linear regression, decreasing the x values results in the correlation value increasing, while doing the opposite decreases it. Conversely, decreasing or increasing the y values results in the correlation value increasing. Meanwhile, for the linear regression section, increasing the x values increases the predicted value, while doing the opposite decreases it. The same relationship can be observed in the y values.<br><br>

            For the third and final notebook, changing the x and y values in a dramatic manner (such as increasing a y value from 55 to 110) will result in the line changing its overall shape, making the changed value become an outlier and completely removing it from the fitted line's general direction. Additionally, the R² score will also decrease, thus meaning that dramatically increasing or decreasing x and y values weakens their relationship.</p><br><br>


        <h2 id="unit4-seminar-prep"><br>Unit 4 Seminar Preparation</h2>
            <p>The unit 4 seminar preparation consisted of analysing two datasets containing global GDP and population data, respectively, and verifying how feasible it would be to predict the mean per capita GDP by using the mean population as the sole feature.<br><br>

            After preprocessing the data to a proper format, and starting with correlation analysis, it becomes fairly evident that the mean population and mean per capita GDP have a very weak negative correlation of almost 0, as shown in the image below:<br><br> 
            
            <center><img src="img/machine_learning/unit_4_negative_corr.png" height="120" width="600"><br>

            <font size="2">Figure 13: The resulting correlation between mean population and mean per capita GDP</font></center><br><br>
            
            This already shows that fitting a linear model with mean population as a feature would not be ideal, as there is no meaningful relationship between it and mean per capita GDP. This is made evident upon fitting a linear regression model and evaluating it, which produces the following results:<br><br> 

            <center><img src="img/machine_learning/unit_4_linear_reg.png" height="500" width="700"><br>

            <font size="2">Figure 14: The resulting correlation between mean population and mean per capita GDP</font></center><br><br>
            
            Using a polynomial linear regression model produces only marginal improvements, and the fitted model is still very poor. Out of curiosity, using a more complex model, like a random forest regressor, produces a model that is reasonably better than anything so far but which is still mediocre, as shown below:<br><br> 

            <center><img src="img/machine_learning/unit_4_rf_reg.png" height="500" width="700"><br>

            <font size="2">Figure 15: The resulting correlation between mean population and mean per capita GDP</font></center><br><br>

            As such, we can conclude that, even with a robust model that is competent at data understanding, poor feature selection can significantly hamper its efficiency.</p><br><br>     


        <h2 id="unit5-wiki-activity"><br>Wiki Activity</h2>
            <p>The unit 5 wiki activity consisted of, based on two animations, writing a wiki entry relating them to the logic used in clustering algorithms. Following this guide, and based on my own knowledge, led me to the concept of cluster centroids, a fundamental component of clustering. My entry was, thus, as follows: 

            <center><img src="img/machine_learning/unit_5_centroids.png" height="300" width="700"><br>

            <font size="2">Figure 16: My wiki entry, detailing what a cluster centroid is</font></center><br><br>

            Subsequently, one of my peers, Pellümb Dalipi, commented on my entry and introduced further refinements, significantly enhancing my original wiki post:<br><br>
            
            <center><img src="img/machine_learning/unit_5_centroids_peer.png" height="150" width="850"><br>

            <font size="2">Figure 17: Pëllumb's comment on my wiki submission</font></center></p><br><br>


        <h2 id="unit5-jaccard-coef"><br>Jaccard Coefficient Calculations</h2>
            <p>The unit 5 e-portfolio activity consisted of calculating the Jaccard coefficient for the pairs (Jack, Mary), (Jack, Jim) and (Jim, Mary) in the following table: 

            <center><img src="img/machine_learning/unit_5_table.png" height="200" width="1000"><br>

            <font size="2">Figure 18: A table containing pathological test results for three individuals</font></center><br><br>

            To calculate the Jaccard coefficient for each pair, the following process was created:<br><br>
            
            <center><img src="img/machine_learning/unit_5_jaccard_process.png" height="950" width="800"><br>

            <font size="2">Figure 19: The code used to generate the Jaccard coefficient for all pairs</font></center><br><br>
            
            The results reveal that the pair (Jack, Mary) has a coefficient of roughly 33.3%, while (Jack, Jim) has a coefficient of roughly 67% and (Jim, Mary) has a coefficient of 75%. This suggests that the latter two pairs are fairly similar, which is reflected in the data itself.</p><br><br>

    
        <h2 id="unit6-seminar-prep"><br>Unit 6 Seminar Preparation</h2>
            <p>The unit 6 seminar preparation task consisted of analysing the iris, wine and AUS weather datasets, performing k-means clustering on each of them and evaluating the impact of changing the number of clusters.<br><br>

            After preprocessing the data and converting some categorical columns to a numerical format via a mapping process, the following clustering approach was applied to the iris, wine and AUS weather datasets:<br><br>

            <center><img src="img/machine_learning/unit_6_clustering.png" height="700" width="600"><br>

            <font size="2">Figure 20: The clustering approach used on the iris dataset. The same code, with minor alterations, was subsequently applied to the other datasets</font></center><br><br>

            As can be seen, the data was initially standardised before being used on the k-means algorithm. Principal component analysis (PCA), a dimensionality reduction algorithm, was also used to help with plotting.<br><br>

            For the iris dataset, using two, four, five and six clusters produced interesting results, although the data points were not well separated with two clusters and there was too much of an overlap with four or more clusters. The best results were obtained with three clusters, which matches the number of species in the dataset. This resulted in the following plot:<br><br>

            <center><img src="img/machine_learning/iris_clusters.png" height="500" width="600"><br>

            <font size="2">Figure 21: Clustering results for the iris dataset</font></center><br><br>

            For the wine dataset, the results are similar to what was obtained in the iris dataset. Using three clusters produced the best results, which matches the number of wine cultivars in the dataset. This resulted in the following plot:<br><br>

            <center><img src="img/machine_learning/wine_clusters.png" height="500" width="600"><br>

            <font size="2">Figure 22: Clustering results for the wine dataset</font></center><br><br>

            Finally, the same pattern was repeated for the AUS weather dataset, where using three clusters also produced the best results. Interestingly, this matches the possible combinations of the "RainToday" and "RainTomorrow" columns, as it can rain today and/or tomorrow. This resulted in the following plot:<br><br> 

            <center><img src="img/machine_learning/aus_weather_clusters.png" height="500" width="600"><br>

            <font size="2">Figure 23: Clustering results for the AUS weather dataset</font></center><br><br>

            The results of these k-means clustering experiments reveal that, generally, the best results for these specific datasets is obtained when the number of clusters corresponds to the number of distinct classes or their combinations (as observed in the AUS weather dataset). For other datasets, this alignment may depend on other factors, such as the clustering algorithm used and data separability.</p><br><br>


        <h2 id="development-team-project"><br>Development Team Project: Project Report</h2>
            <p>The goal behind this team project was to develop a data science-backed approach to conduct business analysis on the 2019 New York City rentals dataset from Airbnb. This project had to consist of a answering a question that would be relevant to the company through data analysis, and which would culminate in the creation of an analytical report.<br><br>

            The group I was a part of, named "Global Insights", was comprised of Munro Ross, myself, Yuji Watanabe and Zhu Zhang, all of whom reside in different corners of the world.
            
            <center><img src="img/machine_learning/team_contract_snippet.png" height="600" width="600"><br>

            <font size="2">Figure 24: A snippet of the team contract</font></center><br><br>

            Group discussions and alignments led the group to introduce not one but three business questions that would be of interest to Airbnb. These were:<br><br>
            
            <i>
            1. How does location and room type affect the cost of the room?<br>
            2. How does availability over the next year correlate to room type and location?<br>
            3. What is the distribution of listings between hosts and property types?</i><br><br>

            <center><img src="img/machine_learning/airbnb_analysis_snippet.png" height="500" width="600"><br>

            <font size="2">Figure 25: A snippet of the Jupyter notebook used for the data analysis step</font></center><br><br>

            The team developed a Jupyter notebook to conduct data analysis on the Airbnb dataset. In it, we conducted data cleaning to address null rows, performed categorical to numerical conversions on some columns and also mapped these to numbers, thus allowing for correlation to be calculated and clustering to be performed.<br><br>

            <center><img src="img/machine_learning/report_snippet.png" height="600" width="600"><br>

            <font size="2">Figure 26: A snippet of the analytical report, with a bar plot taken from the data analysis Jupyter notebook</font></center><br><br>

            The report incorporated the insights gained during the data analysis step, providing definitive answers to the questions that were posed by the group. There was also an emphasis on making the content in the report easy to understand and direct, as the idea of it was to make it resemble an actual report that company executives were expected to go through. As such, we had to prioritise providing concise and clear information.<br><br>

            Overall, the project allowed us to work as a team, tackling the task in a similar manner to professional environments. Time management, orsanisational skills, collaboration and dedication were key, allowing us to not only deliver a functioning solution but a well-documented one as well. For instance, we used the limitations imposed on us in the analytical report section to build a concise document that would be of significant value to Airbnb executives, highlighting data insights that could only be obtained through in-depth data analysis and modelling.</p><br><br>


        <h2 id="reflective-piece1"><br>Mid-Module Reflective Piece</h2>
            <p>The module starts off by slowly introducing students to the world of deep learning, before progressively allowing us to have free reign in investigating and exploring various algorithms. As someone familiar with many concepts in both machine learning and deep learning, such as gradient descent, activation functions and neural network architectures, the various activities served as a refresher. Additionally, the focus on EDA served as a complement to my own professional activities, given I'm expected to be able to provide visuals that will be used to offer a more intuitive way to understand what I may be working on.<br><br>

            In the module's subsequent units, working as a team started to become a theme and culminated in unit 6's group project. As I'm accostumed to working with individuals in other time zones, adapting to group members' availability was a quick process, yet the extreme time zone difference with some members was still complex to maneuvre. Regardless, I was the one who brought the team members together and organised a chat for us to interact with each other, crafted the initial version of the team contract and set up the main notebook for us to work on. Overall, the project was very interesting, despite its challenges, as it allowed me to work with talented individuals and implement several interesting ideas that would've proven too time-consuming if done alone. 


        <h2 id="unit7-perceptron"><br>Perceptron Activities</h2>
            <p>The unit 7 e-portfolio activity consisted of analysing the output of three perceptron-focused Jupyter notebooks once their initial values had been changed.<br><br>

            The first notebook consisted of a simple perceptron with inputs and weights, as well as the dot product that's characteristic of perceptron output layers. Changing the weight values produces the most impact in the dot product calculation, as is expected, and can be observed below:<br><br>
            
            <center><img src="img/machine_learning/unit_7_first_perceptron.png" height="400" width="700"><br>

            <font size="2">Figure 27: The first notebook's perceptron results, which was originally 34, after the weights were changed from [0.7, 0.1] to [1.2, 0.7]. The original input values of [45, 25] were not modified</font></center><br><br>

            The second notebook, on the other hand, consisted of a more elaborate perceptron implementation with a training function and classification section. Focusing on the training function, and given the data being used in this particular notebook, it is possible to obtain zero error, something that is virtually unheard of in real-world applications. This function can be changed to run for a number of epochs instead, thus meaning that the function will run for a determinate amount of steps instead of until the error is zero, which is more realistic. Additionally, by making the weights random with values between a certain range, and changing the learning rate to 0.001, the outcome now closely resembles real-world training procedures for artificial neural networks, which can be seen as follows:<br><br>

            <center><img src="img/machine_learning/unit_7_second_perceptron.png" height="850" width="600"><br>

            <font size="2">Figure 28: The second notebook's training function, where it now runs for fifty epochs instead of aiming for an error rate of zero</font></center><br><br>

            The third notebook encapsulates everything seen so far, as it culminates in the creation of a complete multi-layer perceptron with a training function and classification section. This notebook shows how the perceptron is able to handle the complexity of XOR operations after being trained for four hundred thousand epochs. Indeed, if we increase the number of epochs even further to two million, the error rate decreases even further, as shown below:<br><br>

            <center><img src="img/machine_learning/unit_7_third_perceptron.png" height="850" width="600"><br>

            <font size="2">Figure 29: The third notebook's training function, where it now runs for two million epochs, showing how the error keeps decreasing but at a slower pace now. At some point, and regardless of how many epochs, the error rate will not decrease any further</font></center><br><br>
    
    
        <h2 id="colab-2">Collaborative Learning Discussion 2</h2>
            <p>The second collaborative learning discussion served as a way for students to deepen their understanding of AI by discussing about LLMs, one of the most prevalent AI systems today. For it, we had the following topic to elaborate on:<br><br>
            
            "<i>Read/listen to the article by Hutson (2021) in Nature on Robo-writers. This week, post your thoughts on the risks and benefits of the use AI writers at different levels, from administrative work to creative writing.<br><br>

            You should demonstrate that you understand the topic covered and ensure you use references to academic literature (journals, books, reports, etc.)"</i><br><br>

            Students were required to create an initial post and, then, address at least 2 of their peers' submissions before creating a summary post. This final entry would serve as an evolved version of a student's initial post, incorporating peer responses and directly addressing them by either agreeing or not and providing the reasons for either case. My initial post, "Human-like or Stochastic Parrots?", was as follows.<br><br>
            
            <center><img src="img/machine_learning/initial_post_2.png" height="600" width="1200"><br>

            <font size="2">Figure 30: My initial post in the second collaborative learning discussion forum</font></center></p><br><br>

            
            <h3 id="colab-21"><br>Peer feedback</h3>
                <p>The peer responses from Natali Nikolic were instrumental in building upon my initial post. Her response was as follows.<br><br>
                
                <center><img src="img/machine_learning/natali_disc2.png" height="550" width="1000"><br>

                <font size="2">Figure 31: Natali's peer response to my initial post</font></center><br><br>


            <h3 id="colab-22"><br>Summary post</h3>
                <p>My initial entry was significantly enhanced by Natali's feedback. Her comments were addressed by my summary post, which was as follows:<br><br>

                <center><img src="img/machine_learning/summary_post_disc2.png" height="600" width="1100"><br>
                
                <font size="2">Figure 32: My summary post in the second discussion forum</font></center></p><br><br>


        <h2 id="unit8-gradient-descent"><br>Gradient Cost Function</h2>
            <p>The unit 8 e-portfolio activity consisted of evaluating the output of a gradient descent function when using different values for the learning rate and number of epochs. The goal was to understand the impact of these two parameters in an optimisation function that is very often used by artificial neural networks for learning.<br><br>

            When modifying the gradient descent's learning rate and number of epochs, a relationship between them becomes evident. The learning rate must be chosen carefully depending on how many epochs the algorithm will run for. Should the learning rate be too high, an unstable optimisation procedure will result in the cost, or error, decreasing erratically before suddenly increasing as the learning rate will be large enough for the gradient steps to overshoot the minima. This can be seen in the image below:<br><br>
            
            <center><img src="img/machine_learning/unit_8_lr_too_high.png" height="850" width="600"><br>

            <font size="2">Figure 33: The results of the gradient descent function when the learning rate is too high</font></center><br><br>
            
            Conversely, should the learning rate be too low, the function will be extremely slow as the cost will decrease slowly before possibly stalling at a sub-optimal point without much improvement. This can be seen in the image below:<br><br>

            <center><img src="img/machine_learning/unit_8_lr_too_low.png" height="850" width="600"><br>

            <font size="2">Figure 34: The results of the gradient descent function when the learning rate is too low</font></center></p><br><br>


        <h2 id="unit9-cnn"><br>CNN Model Activity</h2>
            <p>The unit 9 e-portfolio activity consisted of reading the Wall (2019) article, recording my thoughts on the ethical and social implications of convolutional neural networks (CNNs) and running a CNN model to evaluate its output based on which image is being provided to it.

            Matthew Wall's article explores how facial recognition technology presents innumerous concerns, most notably amongst them being privacy and the incorporation of biases present in the training data. Dr. Timnit Gebru's statement of how about a hundred and thirty million US adults are already in face recognition databases, with most of such records belonging to white and male individuals, already showcases a bias towards people of color and makes them more liable to be identified as someone they're not. As facial recognition systems become more widespread, stricter regulations and considerations need to be put in place so that, if such systems truly need to be adopted, classification failures don't end up ruining an innocent's life.<br><br>

            Regarding the CNN section, the default image (or object) being predicted is a dog. Changing the image provided to the model (to a ship or truck, for instance) for inference resulted in the CNN correctly identifying the object in question.<br><br>

            <center><img src="img/machine_learning/unit_9_cnn_inference.png" height="650" width="600"><br>

            <font size="2">Figure 35: The CNN correctly identifying the object in the image as a truck</font></center><br><br>
            
            The CNN is able to correctly identify a majority of the object classes due to its high accuracy. Despite CIFAR-10 being a fairly complex dataset, the convolutional layers in the CNN manage to essentially "dissect" the images into distinct features that contribute to correct identification.</p><br><br>


        <h2 id="unit11-performance"><br>Model Performance Measurement</h2>
            <p>The unit 11 e-portfolio activity consisted of running a model performance measurement Jupyter notebook, changing different parameters and observing their impact on area under the curve (AUC) and the R-squared (R²) error.

            Starting with AUC and focusing on the one-vs-all classifier, its original value is 0.79, which indicates that the model is reasonably good at discriminating between positive and negative cases. Changing the kernel method of the support vector classification (SVC) model being used from "linear" to "poly" (polynomial), for instance, results in a better ROC AUC value of 0.85, as shown below:

            <center><img src="img/machine_learning/unit_11_auc.png" height="500" width="600"><br>

            <font size="2">Figure 36: The ROC AUC produced after changing the SVC's kernel method</font></center><br><br>

            As for the R² score, a set of true values, (3, -0.5, 2, 7) is matched up against the predicted set of values, (2.5, 0.0, 2, 8). The original value was of ~0.9486, which indicates that this fake model was able to explain roughly 95% of the variance in the data. Changing predicted set of values to be closer to the true values in the real set results in a better R² value, as shown below:<br><br>    

            <center><img src="img/machine_learning/unit_11_r2.png" height="500" width="500"><br>

            <font size="2">Figure 37: The new R² score after making the predicted set of values closer to the real one</font></center></p><br><br>


        <h2 id="final-project"><br>Individual Presentation</h2>
            <p>The final assignment in the module consisted of developing an artificial neural network using the CIFAR-10 dataset for image recognition and then recording a twenty-minute presentation to explain the solution.<br><br>

            Interestingly, this assignment was similar to the one from unit 6, as there'd once more be the need for both the coding and documentation aspects that real-world projects require. However, given students would be working alone in this task, it essentially served as a way for us to leverage what we learned from prior units, and from working together in the prior assignment, to structure how we'd tackle this challenge. I decided to go into detail regarding the dataset's structure, its partitioning into subsets, data transformations, the neural network architecture and more, with the goal of offering a comprehensive overview of not only the experiment itself but also of how deep learning solutions are usually approached and developed.<br><br>
            
            <center><img src="img/machine_learning/final_assignment_slide.png" height="550" width="900"><br>

            <font size="2">Figure 38: One of the slides from the presentation, showing the training and validation losses</font></center><br><br>

            Additionally, to make things more realistic, I imposed a limitation on my own solution, where I wouldn't be allowed to use a large model in order to mirror resource constraints. This forced me to optimise my solution as best as I could, while also avoiding the use of a neural network architecture that may have proven too simplistic for the CIFAR-10 dataset. Additionally, I enforced the use of a manual seed component to make the experiment reproducible.<br><br>
            
            <center><img src="img/machine_learning/cnn_architecture.png" height="750" width="700"><br>

            <font size="2">Figure 39: The architecture used for the neural network. It represents a convolutional neural network (CNN), which is a type of neural network inspired by the human visual cortex</font></center><br><br>

            Overall, the final assignment culminates in the use of essentially everything we've learned throughout the module, providing a major application that's solely dependent on the student's ability to leverage all of the units' content. Given a presentation was also required for this task, it allowed me to improve my confidence and knowledge-sharing methods, which is essential not only for roles in academia but in industry as well.</p>

        
        <h2 id="reflective-piece2"><br>Final Reflective Piece</h2>
            <p>The module was essential in allowing me to refine my own understanding of not only machine learning, but deep learning as well, offering several impactful and elaborate tasks and assignments. Additionally, the importance of EDA and understanding the data that's being used was emphasised, which is often not treated seriously enough in both academic and professional environments.<br><br>

            Working as a team was also something that the module placed an importance on, as evidenced by the group assignment. Academic debates were also present throughout the collaborative forums, highlighting the need for critical yet respectful interactions about topics of importance in science. Furthermore, such interactions were instrumental in improving my soft skills like communication, leadership and time management skills, which I've been able to successfully integrate into my professional endeavours.<br><br>

            Overall, the "Machine Learning" module was a multifaceted one where focus was placed on theoretical and practical applications, while also highlighting the need for effective and cooperative relationships with others. Not only did it allow me to practice my understanding of various topics I've already had contact with, but also enabled me to improve the way I communicate with others and even lead them, paving the way for my own continued growth in an accelerated manner.</p>
    </div>
  </div>
</div>
</main>

<script src="../js/pgConfgMarkdown.js"></script>