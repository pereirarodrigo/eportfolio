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
    <li><a href="#unit5-jaccard-coef">Jaccard Coefficient Calculations</a>
    </li>
    <li><a href="#unit6-seminar-prep">Unit 6 Seminar Preparation</a>
    </li>
    <li><a href="#development-team-project">Development Team Project: Project Report</a>
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
</div>

<main class="summaryContent">
<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        <h2 id="introduction">Introduction</h2>
            <p>With Dr. Steph Palladini as our tutor, the "Machine Learning" module added more depth to students' understanding of artificial intelligence (AI). It delved into the theoretical and practical aspects of machine learning, one of AI's most prolific fields, while also emphasising the role of data analytics in enabling data professionals to understand the data that they're working with. The module was instrumental in equipping students not only with practical and theoretical skills, but also the necessary mindset to engage in mature critical discussions regarding this increasingly important field.</p><br><br>


        <h2 id="colab-1">Collaborative Learning Discussion 1</h2>
            <p>The first collaborative learning discussion served as a way for students to warm up to the module by discussing one of AI's peripheral themes. For it, we had the following topic to elaborate on:<br><br>
            
            "<i>Read the Schwab (2016) article from World Economic Forum and discuss the impact of industry 4.0 on the sector in which you are involved or interested.<br><br>

            Instructions:<br><br>
                
                a) Identify a specific incident (not covered in your reading list) where the failure of an information system has had a significant impact.<br>
                b) Your post could consider a range of impacts of the failure, including: the implications to customers, the economic cost, the reputational cost, or any other relevant impacts.<br>
                c) Review lecturecast 1 and read papers provided in the references list.<br>
                d) Go to the discussion forum and create an initial post of your contribution to the discussion.<br><br>

            You should demonstrate that you understand the topic covered and ensure you use references to academic literature (journals, books, reports, etc.)."</i><br><br>

            Students were required to create an initial post and, then, address at least 3 of their peers' submissions before creating a summary post. This final entry would serve as an evolved version of a student's initial post, incorporating peer responses and directly addressing them by either agreeing or not and providing the reasons for either case. My initial post, "Finance's Double-Edged Sword", was as follows.<br><br>
            
            <center><img src="img/machine_learning/initial_post.png" height="600" width="1200"><br>

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


        <h2 id="unit5-jaccard-coef"><br>Jaccard Coefficient Calculations</h2>
            <p>The unit 5 e-portfolio activity consisted of calculating the Jaccard coefficient for the pairs (Jack, Mary), (Jack, Jim) and (Jim, Mary) in the following table: 

            <center><img src="img/machine_learning/unit_5_table.png" height="200" width="1000"><br>

            <font size="2">Figure 16: A table containing pathological test results for three individuals</font></center><br><br>

            To calculate the Jaccard coefficient for each pair, the following process was created:<br><br>
            
            <center><img src="img/machine_learning/unit_5_jaccard_process.png" height="950" width="800"><br>

            <font size="2">Figure 17: The code used to generate the Jaccard coefficient for all pairs</font></center><br><br>
            
            The results reveal that the pair (Jack, Mary) has a coefficient of roughly 33.3%, while (Jack, Jim) has a coefficient of roughly 67% and (Jim, Mary) has a coefficient of 75%. This suggests that the latter two pairs are fairly similar, which is reflected in the data itself.</p><br><br>

    
        <h2 id="unit6-seminar-prep"><br>Unit 6 Seminar Preparation</h2>
            <p>The unit 6 seminar preparation task consisted of analysing the iris, wine and AUS weather datasets, performing k-means clustering on each of them and evaluating the impact of changing the number of clusters.<br><br>

            After preprocessing the data and converting some categorical columns to a numerical format via a mapping process, the following clustering approach was applied to the iris, wine and AUS weather datasets:<br><br>

            <center><img src="img/machine_learning/unit_6_clustering.png" height="700" width="600"><br>

            <font size="2">Figure 18: The clustering approach used on the iris dataset. The same code, with minor alterations, was subsequently applied to the other datasets</font></center><br><br>

            As can be seen, the data was initially standardised before being used on the k-means algorithm. Principal component analysis (PCA), a dimensionality reduction algorithm, was also used to help with plotting.<br><br>

            For the iris dataset, using two, four, five and six clusters produced interesting results, although the data points were not well separated with two clusters and there was too much of an overlap with four or more clusters. The best results were obtained with three clusters, which matches the number of species in the dataset. This resulted in the following plot:<br><br>

            <center><img src="img/machine_learning/iris_clusters.png" height="500" width="600"><br>

            <font size="2">Figure 19: Clustering results for the iris dataset</font></center><br><br>

            For the wine dataset, the results are similar to what was obtained in the iris dataset. Using three clusters produced the best results, which matches the number of wine cultivars in the dataset. This resulted in the following plot:<br><br>

            <center><img src="img/machine_learning/wine_clusters.png" height="500" width="600"><br>

            <font size="2">Figure 20: Clustering results for the wine dataset</font></center><br><br>

            Finally, the same pattern was repeated for the AUS weather dataset, where using three clusters also produced the best results. Interestingly, this matches the possible combinations of the "RainToday" and "RainTomorrow" columns, as it can rain today and/or tomorrow. This resulted in the following plot:<br><br> 

            <center><img src="img/machine_learning/aus_weather_clusters.png" height="500" width="600"><br>

            <font size="2">Figure 20: Clustering results for the AUS weather dataset</font></center><br><br>

            The results of these k-means clustering experiments reveal that, generally, the best results for these specific datasets is obtained when the number of clusters corresponds to the number of distinct classes or their combinations (as observed in the AUS weather dataset). For other datasets, this alignment may depend on other factors, such as the clustering algorithm used and data separability.</p><br><br>


        <h2 id="development-team-project"><br>Development Team Project: Project Report</h2>
            <p>The goal behind this team project was to develop a data science-backed approach to conduct business analysis on the 2019 New York City rentals dataset from AirBnb. This project had to consist of a answering a question that would be relevant to the company through data analysis, and which would culminate in the creation of an analytical report.<br><br>

            The group I was a part of, named "Global Insights", was comprised of Munro Ross, myself, Yuji Watanabe and Zhu Zhang, all of whom reside in different corners of the world.
            
            <center><img src="img/machine_learning/team_contract_snippet.png" height="600" width="600"><br>

            <font size="2">Figure 21: A snippet of the team contract</font></center><br><br>

            Group discussions and alignments led the group to introduce not one but three business questions that would be of interest to AirBnb. These were:<br><br>
            
            <i>
            1. How does location and room type affect the cost of the room?<br>
            2. How does availability over the next year correlate to room type and location?<br>
            3. What is the distribution of listings between hosts and property types?</i><br><br>

            <center><img src="img/machine_learning/airbnb_analysis_snippet.png" height="500" width="600"><br>

            <font size="2">Figure 22: A snippet of the Jupyter notebook used for the data analysis step</font></center><br><br>

            The team developed a Jupyter notebook to conduct data analysis on the AirBnb dataset. In it, we conducted data cleaning to address null rows, performed categorical to numerical conversions on some columns and also mapped these to numbers, thus allowing for correlation to be calculated and clustering to be performed.<br><br>

            <center><img src="img/machine_learning/report_snippet.png" height="600" width="600"><br>

            <font size="2">Figure 23: A snippet of the analytical report, with a bar plot taken from the data analysis Jupyter notebook</font></center><br><br>

            The report incorporated the insights gained during the data analysis step, providing definitive answers to the questions that were posed by the group. There was also an emphasis on making the content in the report easy to understand and direct, as the idea of it was to make it resemble an actual report that company executives were expected to go through. As such, we had to prioritise providing concise and clear information.<br><br>


        <h2 id="unit7-perceptron"><br>Perceptron Activities</h2>
            <p>The unit 7 e-portfolio activity consisted of analysing the output of three perceptron-focused Jupyter notebooks once their initial values had been changed.<br><br>

            The first notebook consisted of a simple perceptron with inputs and weights, as well as the dot product that's characteristic of perceptron output layers. Changing the weight values produces the most impact in the dot product calculation, as is expected, and can be observed below:<br><br>
            
            <center><img src="img/machine_learning/unit_7_first_perceptron.png" height="400" width="700"><br>

            <font size="2">Figure 24: The first notebook's perceptron results, which was originally 34, after the weights were changed from [0.7, 0.1] to [1.2, 0.7]. The original input values of [45, 25] were not modified</font></center><br><br>

            The second notebook, on the other hand, consisted of a more elaborate perceptron implementation with a training function and classification section. Focusing on the training function, and given the data being used in this particular notebook, it is possible to obtain zero error, something that is virtually unheard of in real-world applications. This function can be changed to run for a number of epochs instead, thus meaning that the function will run for a determinate amount of steps instead of until the error is zero, which is more realistic. Additionally, by making the weights random with values between a certain range, and changing the learning rate to 0.001, the outcome now closely resembles real-world training procedures for artificial neural networks, which can be seen as follows:<br><br>

            <center><img src="img/machine_learning/unit_7_second_perceptron.png" height="850" width="600"><br>

            <font size="2">Figure 25: The second notebook's training function, where it now runs for fifty epochs instead of aiming for an error rate of zero</font></center><br><br>

            The third notebook encapsulates everything seen so far, as it culminates in the creation of a complete multi-layer perceptron with a training function and classification section. This notebook shows how the perceptron is able to handle the complexity of XOR operations after being trained for four hundred thousand epochs. Indeed, if we increase the number of epochs even further to two million, the error rate decreases even further, as shown below:<br><br>

            <center><img src="img/machine_learning/unit_7_third_perceptron.png" height="850" width="600"><br>

            <font size="2">Figure 26: The third notebook's training function, where it now runs for two million epochs, showing how the error keeps decreasing but at a slower pace now. At some point, and regardless of how many epochs, the error rate will not decrease any further</font></center><br><br>
    
    
        <h2 id="colab-2">Collaborative Learning Discussion 2</h2>
            <p>The second collaborative learning discussion served as a way for students to deepen their understanding of AI by discussing about LLMs, one of the most prevalent AI systems today. For it, we had the following topic to elaborate on:<br><br>
            
            "<i>Read/listen to the article by Hutson (2021) in Nature on Robo-writers. This week, post your thoughts on the risks and benefits of the use AI writers at different levels, from administrative work to creative writing.<br><br>

            You should demonstrate that you understand the topic covered and ensure you use references to academic literature (journals, books, reports, etc.)"</i><br><br>

            Students were required to create an initial post and, then, address at least 2 of their peers' submissions before creating a summary post. This final entry would serve as an evolved version of a student's initial post, incorporating peer responses and directly addressing them by either agreeing or not and providing the reasons for either case. My initial post, "Human-like or Stochastic Parrots?", was as follows.<br><br>
            
            <center><img src="img/machine_learning/initial_post_2.png" height="600" width="1200"><br>

            <font size="2">Figure 27: My initial post in the second collaborative learning discussion forum</font></center></p><br><br>

            
            <h3 id="colab-21"><br>Peer feedback</h3>
                <p>The peer responses from Natali Nikolic, Yuji Watanabe and Stuart Gibb, three of my peers, were instrumental in building upon my initial post. For Natali, her response was as follows.<br><br>
                
                <center><img src="img/machine_learning/natali_disc1.png" height="600" width="1000"><br>

                <font size="2">Figure 28: Natali's peer response to my initial post</font></center><br><br>

                As for Yuji, his response was the following:<br><br><br>

                <center><img src="img/machine_learning/yuji_disc1.png" height="500" width="1100"><br>
                
                <font size="2">Figure 29: Yuji's peer response to my initial post</font></center><br><br>
                
                Finally, for Stuart, his response was the following:<br><br><br>

                <center><img src="img/machine_learning/stuart_disc1.png" height="600" width="1100"><br>
                
                <font size="2">Figure 30: Stuart's peer response to my initial post</font></center></p><br><br>


            <h3 id="colab-22"><br>Summary post</h3>
                <p>My initial entry was significantly enhanced by my peers' feedback. Their comments were addressed by my summary post, which was as follows:<br><br>

                <center><img src="img/machine_learning/summary_post_disc1.png" height="600" width="1100"><br>
                
                <font size="2">Figure 31: My summary post in the first discussion forum</font></center></p><br><br>


        <h2 id="unit8-gradient-descent"><br>Gradient Cost Function</h2>
            <p>The unit 8 e-portfolio activity consisted of evaluating the output of a gradient descent function when using different values for the learning rate and number of epochs. The goal was to understand the impact of these two parameters in an optimisation function that is very often used by artificial neural networks for learning.<br><br>

            When modifying the gradient descent's learning rate and number of epochs, a relationship between them becomes evident. The learning rate must be chosen carefully depending on how many epochs the algorithm will run for. Should the learning rate be too high, an unstable optimisation procedure will result in the cost, or error, decreasing erratically before suddenly increasing as the learning rate will be large enough for the gradient steps to overshoot the minima. This can be seen in the image below:<br><br>
            
            <center><img src="img/machine_learning/unit_8_lr_too_high.png" height="850" width="600"><br>

            <font size="2">Figure 32: The results of the gradient descent function when the learning rate is too high</font></center><br><br>
            
            Conversely, should the learning rate be too low, the function will be extremely slow as the cost will decrease slowly before possibly stalling at a sub-optimal point without much improvement. This can be seen in the image below:<br><br>

            <center><img src="img/machine_learning/unit_8_lr_too_low.png" height="850" width="600"><br>

            <font size="2">Figure 33: The results of the gradient descent function when the learning rate is too low</font></center><br><br>


        <h2 id="unit9-cnn"><br>CNN Model Activity</h2>
            <p>The unit 9 e-portfolio activity consisted of reading the Wall (2019) article, recording my thoughts on the ethical and social implications of convolutional neural networks (CNNs) and running a CNN model to evaluate its output based on which image is being provided to it.

            Matthew Wall's article explores how facial recognition technology presents innumerous concerns, most notably amongst them being privacy and the incorporation of biases present in the training data. Dr. Timnit Gebru's statement of how about a hundred and thirty million US adults are already in face recognition databases, with most of such records belonging to white and male individuals, already showcases a bias towards people of color and makes them more liable to be identified as someone they're not. As facial recognition systems become more widespread, stricter regulations and considerations need to be put in place so that, if such systems truly need to be adopted, classification failures don't end up ruining an innocent's life.<br><br>

            Regarding the CNN section, the default image (or object) being predicted is a dog. Changing the image provided to the model (to a ship or truck, for instance) for inference resulted in the CNN correctly identifying the object in question.<br><br>

            <center><img src="img/machine_learning/unit_9_cnn_inference.png" height="650" width="600"><br>

            <font size="2">Figure 34: The CNN correctly identifying the object in the image as a truck</font></center><br><br>
            
            The CNN is able to correctly identify all of the object classes due to the dataset that was used to train it, CIFAR-10, which contains the same amount of samples (six thousand) for each object. Should there have been an imbalance in the dataset, as is the case with most real-world data, it's possible that model predictions wouldn't have been as flawless as they were in this example.<br><br>


        <h2 id="unit11-performance"><br>Model Performance Measurement</h2>
            <p>The unit 11 e-portfolio activity consisted of running a model performance measurement Jupyter notebook, changing different parameters and observing their impact on area under the curve (AUC) and the R-squared (R²) error.

            Starting with AUC and focusing on the one-vs-all classifier, its original value is 0.79, which indicates that the model is reasonably good at discriminating between positive and negative cases. Changing the kernel method of the support vector classification (SVC) model being used from "linear" to "poly" (polynomial), for instance, results in a better ROC AUC value of 0.85, as shown below:

            <center><img src="img/machine_learning/unit_11_auc.png" height="500" width="600"><br>

            <font size="2">Figure 35: The ROC AUC produced after changing the SVC's kernel method</font></center><br><br>

            As for the R² score, a set of true values, (3, -0.5, 2, 7) is matched up against the predicted set of values, (2.5, 0.0, 2, 8). The original value was of ~0.9486, which indicates that this fake model was able to explain roughly 95% of the variance in the data. Changing predicted set of values to be closer to the true values in the real set results in a better R² value, as shown below:<br><br>    

            <center><img src="img/machine_learning/unit_11_r2.png" height="500" width="500"><br>

            <font size="2">Figure 36: The new R² score after making the predicted set of values closer to the real one</font></center><br><br>
         
    </div>
  </div>
</div>
</main>

<script src="../js/pgConfgMarkdown.js"></script>