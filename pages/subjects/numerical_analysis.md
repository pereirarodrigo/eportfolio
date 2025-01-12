<div class="divSummary">
<h2 class="verticalText">Summary</h2>
<ul class="summary">
    <li><a href="#introduction">Introduction</a></li>
        <li><a href="#data-activity1">Data Activity 1</a>
        </li>
        <li><a href="#data-activity2">Data Activity 2</a>
        </li>
        <li><a href="#data-activity3">Data Activity 3</a>
        </li>
        <li><a href="#data-activity4">Data Activity 4</a>
        </li>
        <li><a href="#data-activity5">Data Activity 5</a>
        </li>
        <li><a href="#data-activity6">Data Activity 6</a>
        </li>
</div>

<main class="summaryContent">
<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        <h2 id="introduction">Introduction</h2>
            <p>With Dr. Russell Kabir as our tutor, the "Numerical Analysis" module introduced students to concepts and principles in the field of statistics and the R language. The module's goal of providing students with enhanced critical thinking regarding the source and procedures behind the numbers being presented to us, as well as teaching about data manipulation and graphical display, were met and resulted in a clear and comprehensive overview of how important statistics is not only in artificial intelligence (AI) but beyond.</p><br><br>


        <h2 id="data-activity1">Data Activity 1</h2>
            <p>The first data activity (with subtasks 1.1 and 1.2) was oriented around gathering a summary statistic in the <b>antisocx</b> column of the "Crime and Survey for England and Wales, 2013-2014: Unrestricted Access Teaching Dataset", available from <a href="https://beta.ukdataservice.ac.uk/datacatalogue/studies/study?id=8011#!/details">this</a> catalogue page. Loading the dataset with the alias "dataset" and using the right R command resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/antisocx_summary.png" height="150" width="650"><br>
            
            <font size="2">Figure 1: The results of using the <i>summary(dataset$antisocx)</i> command on the dataset</font></center><br><br>

            The image shows that the minimum value present in the column is -1.215, while the first quartile is -0.788, the median is -0.185, the mean is -0.007, the third quartile is 0.528, the maximum value is 4.015 and the number of null values is 6694.
            
            </p><br><br>


        <h2 id="data-activity2">Data Activity 2</h2>
            <p>The second data activity was focused on exploring, using the same dataset and the column <b>bcsvictim</b>, whether survey respondents experienced any crime in the past 12 months prior to the survey and deciding if the variable should be converted into a factor. Loading the dataset with the alias "dataset" and using the right R command resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/bcsvictim_table.png" height="150" width="300"><br>
            
            <font size="2">Figure 2: The results of using the <i>table(dataset$bcsvictim)</i> command on the dataset</font></center><br><br>

            The image shows that the number of people who experienced any crime in the last 12 months is 1383, while 7460 did not.  
            
            Regarding the variable's conversion, given it holds binary values (0 or 1) and denotes a category ("not a victim of crime" and "victim of crime"), it seems sensible to convert it into a factor as this data type is meant to represent categorical data.
            
            </p><br><br>


        <h2 id="data-activity3">Data Activity 3</h2>
            <p>The third data activity was focused on exploring, using the same dataset and the column <b>bcsvictim</b>, whether survey respondents who belong to the "75+" age group experienced any crime in the past 12 months prior to the survey. Loading the dataset with the alias "dataset" and using the right R command resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/bcsvictim_75_plus_table.png" height="750" width="700"><br>
            
            <font size="2">Figure 3: A sample of the results of using the <i>crime_75victim <- subset(dataset, agegrp7 == 7 & bcsvictim == 1)</i> command on the dataset</font></center><br><br>

            In total, 67 individuals who belong to the "75+" age group experienced crime in the past 12 months.
            
            </p><br><br>


        <h2 id="data-activity4">Data Activity 4</h2>
            <p>The fourth data activity was focused on plotting. The first subsection had, as its goal, the creation of a boxplot for the <b>antisocx</b> variable. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/antisocx_boxplot.png" height="750" width="700"><br>
            
            <font size="2">Figure 4: The resulting box plot, using the <i>ggplot2</i> package</font></center><br><br>
            
            It can be seen that most anti-social behaviour levels are concentrated in the plot's lower ranges, with some outliers belonging to higher levels. This shows that most individuals in the survey are, at the very least, relatively social UK citizens.<br><br>

            The second subsection, on the other hand, had as its goal the creation of a bar plot for the <b>bcsvictim</b> variable. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>

            <center><img src="img/numerical_analysis/bcsvictim_barplot.png" height="750" width="700"><br>
            
            <font size="2">Figure 5: The resulting bar plot, using the <i>ggplot2</i> package</font></center><br><br>

            The bar plot shows, as seen previously, that most people in the survey were not victims of crime in the past 12 months. Yet, despite the large difference, it also highlights how almost two thousand people did become victims of crime. 
            
            </p><br><br>


        <h2 id="data-activity5">Data Activity 5</h2>
            <p>The fifth data activity was focused on obtaining the five-figure summary for several variables, plotting the results and running a suitable hypothesis test in the <a href="https://www.my-course.co.uk/pluginfile.php/1201624/mod_page/content/5/Health%20Data.sav">Health_Data</a> dataset. The first subsection had, as its goal, the calculation of the mean, median and mode of the <b>sbp</b>, <b>dbp</b> and <b>income</b> variables. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/mean_median_mode.png" height="250" width="700"><br>
            
            <font size="2">Figure 6: The mean, median and mode of the <b>sbp</b>, <b>dbp</b> and <b>income</b> variables</font></center><br><br>
            
            The second subsection, on the other hand, had as its goal the creation of a box plot for the summary of the <b>income</b> variable. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>

            <center><img src="img/numerical_analysis/income_boxplot.png" height="600" width="700"><br>
            
            <font size="2">Figure 7: The resulting box plot, using the <i>dplyr</i> package</font></center><br><br>

            It can be seen that most income levels are concentrated in the plot's mid range. This shows that the income is relatively balanced amongst the individuals whose data were used in the dataset.<br><br>

            For the third subsection, a t-test was used to verify if there is any association between systolic blood pressure and presence and absence of peptic ulcer. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>

            <center><img src="img/numerical_analysis/t_test_peptic_ulcer.png" height="300" width="750"><br>
            
            <font size="2">Figure 7: The t-test result, produced with the <i>dplyr</i> package</font></center><br><br>

            The t-test, with a p value of 0.2296 (which is less than 0.05, thus making us reject the null hypothesis), implies that there is an significant difference in systolic blood pressure between individuals with and without a peptic ulcer. 
            
            </p><br><br>


        <h2 id="data-activity6">Data Activity 6</h2>
            <p>The fifth data activity was focused on obtaining the five-figure summary for several variables, plotting the results and running a suitable hypothesis test in the <a href="https://www.my-course.co.uk/pluginfile.php/1201624/mod_page/content/5/Health%20Data.sav">Health_Data</a> dataset. The first subsection had, as its goal, the calculation of the mean, median and mode of the <b>sbp</b>, <b>dbp</b> and <b>income</b> variables. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/mean_median_mode.png" height="250" width="700"><br>
            
            <font size="2">Figure 6: The mean, median and mode of the <b>sbp</b>, <b>dbp</b> and <b>income</b> variables</font></center><br><br>
            
            The second subsection, on the other hand, had as its goal the creation of a box plot for the summary of the <b>income</b> variable. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>

            <center><img src="img/numerical_analysis/income_boxplot.png" height="600" width="700"><br>
            
            <font size="2">Figure 7: The resulting box plot, using the <i>dplyr</i> package</font></center><br><br>

            It can be seen that most income levels are concentrated in the plot's mid range. This shows that the income is relatively balanced amongst the individuals whose data were used in the dataset.<br><br>

            For the third subsection, a t-test was used to verify if there is any association between systolic blood pressure and presence and absence of peptic ulcer. Loading the same dataset as before and using the right R commands resulted in the following:<br><br>

            <center><img src="img/numerical_analysis/t_test_peptic_ulcer.png" height="300" width="750"><br>
            
            <font size="2">Figure 7: The t-test result, produced with the <i>dplyr</i> package</font></center><br><br>

            The t-test, with a p value of 0.2296 (which is less than 0.05, thus making us reject the null hypothesis), implies that there is an significant difference in systolic blood pressure between individuals with and without a peptic ulcer. 
            
            </p><br><br>
  </div>
</div>
</main>

<script src="../js/pgConfgMarkdown.js"></script>