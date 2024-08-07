<div class="divSummary">
<h2 class="verticalText">Summary</h2>
<ul class="summary">
    <li><a href="#introduction">Introduction</a></li>
        <li><a href="#data-activity1">Data Activity 1</a>
        </li>
        <li><a href="#data-activity2">Data Activity 2</a>
        </li>
        <li><a href="#colab-outcome">Learning Outcome: Peer Discussions</a>
        </li>
        <li><a href="#assess1">Assessment: Artificial Intelligence and its Applications</a>
            <ul class="sect">
                <li><a href="#assess1-feedback">Tutor feedback</a></li>
            </ul>
        </li>
        <li><a href="#assess2">Assessment: AI Solution Implementation</a>
            <ul class="sect">
                <li><a href="#assess2-feedback">Tutor feedback</a></li>
            </ul>
        </li>
        <li><a href="#assess-outcome">Learning Outcome: Soft and Hard Skills in Business</a>
        </li>
        <li><a href="#reflection">Reflective Piece</a>
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
            
            <center><img src="img/numerical_analysis/antisocx_summary.png" height="150" width="700"><br>
            
            <font size="2">Figure 1: The results of using the <i>summary(dataset$antisocx)</i> command on the dataset</font></center><br><br>

            The image shows that the minimum value present in the column is -1.215, while the first quartile is -0.788, the median is -0.185, the mean is -0.007, the third quartile is 0.528, the maximum value is 4.015 and the number of null values is 6694.
            
            </p><br><br>


        <h2 id="data-activity2">Data Activity 2</h2>
            <p>The second data activity was focused on exploring, using the same dataset and the column <b>bcsvictim</b>, whether survey respondents experienced any crime in the past 12 months prior to the survey and deciding if the variable should be converted into a factor. Loading the dataset with the alias "dataset" and using the right R command resulted in the following:<br><br>
            
            <center><img src="img/numerical_analysis/bcsvictim_table.png" height="150" width="700"><br>
            
            <font size="2">Figure 2: The results of using the <i>table(dataset$bcsvictim)</i> command on the dataset</font></center><br><br>

            The image shows that the number of people who experienced any crime in the last 12 months is 1383, while 7460 did not.  
            
            Regarding the variable's conversion, given it holds binary values (0 or 1) and denotes a category ("not a victim of crime" and "victim of crime"), it seems sensible to convert it into a factor as this data type is meant to represent categorical data.
            
            </p><br><br>


        <h2 id="colab-outcome">Learning Outcome: Peer Discussions</h2>
            <p>The collaborative learning discussions allowed me to engage with my peers in informative and respectful discussions regarding the proposed topics, thus contributing to my growth in two very important aspects:<br><br><br>
            
            a) <b>Critical thinking:</b> The topics were, by nature, geared towards instigating students to work on identifying and addressing their positive and negative aspects. By the time that we had to take part in the second discussion forum, I was much more proficient at thinking critically and this skill only improved by the end of the second collaborative learning discussion;<br><br>
            
            b) <b>Collaboration:</b> I interacted with several students' posts and directly addressed the content present in them. Not only did I agree or disagree as required but I also provided further material that could be of interest to my peers, such as articles and papers, thus collaborating with them in broadening our perspective of a given topic.<br><br>
            
            </p><br><br>


        <h2 id="assess1">Assessment: Artificial Intelligence and its Applications</h2>
            <p>The first assessment involved coming up with a report that would convince the leadership of a ficticious finance startup to adopt AI technologies. The company that I created had the following profile:<br><br> 
            
            <i>Orion is a recently established finance company that specialises in efficient and secure payment processing operations and investment management, offering customers a team of investment specialists to optimise their portfolios and perform quantitative trading. Founded by industry veterans and academics, the company seeks to combine corporate and research-based methods to bring innovation to the finance industry, which is known for its high stakes and competitive nature.</i><br><br>

            The report contained the positive and negative aspects behind AI adoption, the challenges involved in such an action (such as dataset gathering and infrastructure requirements) and the potential boons that could be unlocked by Orion should it make use of this technology responsibly and ethically. Three key areas were identified that could be significantly enhanced by AI adoption, which were:<br><br><br>

            a) <b>Investment planning and execution</b>, with AI being employed in tasks such as forecast generation on market trends, market sentiment analysis and trading bots;<br><br>

            b) <b>Fraud detection</b>, with AI being employed in tasks such as detecting anomalous credit card transactions and email phishing attempts;<br><br>

            c) <b>Customer service</b>, with AI being employed in tasks such as automated customer assistance via chatbots and predicting user needs or issues.
            
            </p><br><br>
            

            <h3 id="assess1-feedback"><br>Tutor feedback</h3>
                <p>Dr. Samuel Danso's feedback allowed me to see the flaws in my report, such as the lack of reference-backed examples. His response was instrumental in allowing me to improve my report for the next assignment, and was as follows<br><br>
                
                <center><img src="img/understanding_ai/tutor_feedback_assign1.png" height="500" width="1200"><br>
                
                <font size="2">Figure 9: Tutor feedback on the first assignment</font></center><br><br>
                
                </p><br><br>


        <h2 id="assess2">Assessment: AI Application Solution</h2>
            <p>The second assignment was a direct continuation of the previous one. In this report, we had to come up with an experiment using one of the previously defined three key areas to demonstrate that our AI claims were achievable. My experiment focused on identifying fraudulent credit card transactions via machine learning (ML) algorithms, more specifically supervised learning approaches. To make the experiment as organised and reproducible as possible, the CRISP-DM process was employed.<br><br>

            <center><img src="https://www.sv-europe.com/wp-content/uploads/2016/04/Screenshot-2016-04-20-11.58.54.png" height="500" width="600"><br>
                
            <font size="2">Figure 10: The CRISP-DM process (<a href="https://www.sv-europe.com/crisp-dm-methodology/">Smart Vision Europe</a>)</font></center><br><br>

            As such, the experiment focused on business understanding, data understanding and preparation, modelling and evaluation. Deployment was not addressed as it was out of scope, but recommendations were made when it comes to monitoring data and model drift.<br><br>
            
            When it comes to the candidate models that were considered, the following research-backed options were evaluated:<br><br>
            
            a) J48 (decision tree);<br> 
            b) Naive Bayes;<br>
            c) Random forest;<br>
            d) Logistic regression;<br>
            e) Multilayer perceptron.<br><br>
            
            The models were trained and evaluated using stratified k-fold cross-validation, and the best-fit model underwent a limited hyperparameter tuning process to ascertain if it could be improved even further. 
            
            </p><br><br>
                

            <h3 id="assess2-feedback"><br>Tutor feedback</h3>
                <p>Dr. Samuel Danso's feedback showed that my report's overall structure had greatly improved, although there was room for further improvement when it came to providing more details on what was being done. His feedback was as follows:<br><br>
                
                <center><img src="img/understanding_ai/tutor_feedback_assign2.png" height="350" width="1200"><br>
                
                <font size="2">Figure 10: Tutor feedback on the second assignment</font></center><br><br>
                
                </p><br><br>
        
    
        <h2 id="assess-outcome">Learning Outcome: Soft and Hard Skills in Business</h2>
            <p>The assignments were incredibly useful in demonstrating to students that, in industry (and even in academia), hard skills (such as programming) alone are not enough. Soft skills (such as communication) will always be required, especially for the following reasons:<br><br><br>
            
            a) <b>Technical barrier:</b> Business-oriented individuals will, in most cases, not have the technical depth and expertise that, for instance, a data scientist possesses. Communication must be levelled out so that they can understand what is being done and why;<br><br>

            b) <b>Politics:</b> Internal politics, such as department rivalries, must be navigated so that technical projects are not affected, and the only way of achieving this is by having a clear and direct line of communication, as well as good negotiating skills;<br><br>

            c) <b>Collaboration:</b> Technical projects often involve multiple teams with diverse expertise. Effective communication ensures that all team members are on the same page, which is essential for the successful completion of projects;<br><br>

            d) <b>Conflict resolution:</b> Conflicts are inevitable in any collaborative setting. Having strong interpersonal skills will prove instrumental in resolving conflicts amicably, ensuring that the focus remains on the project goals.

            </p><br><br>


        <h2 id="reflection">Reflective Piece</h2>
            <p>The "Understanding Artificial Intelligence" module was instrumental in not only introducing students to the world of AI, but also in enabling us to engage in meaningful and reference-backed discussions and conducting independent experiments. All of the tasks in the module required us to think independently and critically, evaluating all possible actions and outcomes in an impartial manner and choosing the best path based on the available constraints. The module was designed in such a way that it allowed even newcomers to the field to understand how complex implementing and maintaining AI systems is, both from technical and business perspectives.<br><br> 
            
            Additionally, the legal, ethical and professional principles behind AI are vast and were carefully addressed in the module, allowing students to grasp just how large of an impact this technology is making in modern society. This field is evolving in such a rapid pace that indiscriminate usage, both by individuals and companies alike, will result in substantial damage should it not be monitored and regulated effectively. Balancing this regulatory process will be important in allowing innovative creations to help shape the future of AI while blocking nefarious practices that may arise out of it.</p>
    </div>
  </div>
</div>
</main>

<script src="../js/pgConfgMarkdown.js"></script>