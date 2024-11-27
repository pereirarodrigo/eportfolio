<div class="divSummary">
<h2 class="verticalText">Summary</h2>
<ul class="summary">
    <li><a href="#introduction">Introduction</a></li>
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
                
                <center><img src="img/machine_learning/natali_disc1.png" height="600" width="1100"><br>

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

            The results of these k-means clustering experiments reveal that, generally, the best results for these specific datasets is obtained when the number of clusters corresponds to the number of distinct classes or their combinations (as observed in the AUS weather dataset). For other datasets, this alignment may depend on other factors, such as the clustering algorithm used and data separability, 
    </div>
  </div>
</div>
</main>

<script src="../js/pgConfgMarkdown.js"></script>