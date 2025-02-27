//使用 LocalStorage 存储多语言设置
var ls = window.localStorage;

//定义一个感应并切换语言的定时器
var langInterval;

//获取浏览器语言以自动设置显示语言
var lang = navigator.language;
lang = lang.substring(0, 2);
if(!ls.lang){
    if(lang == "zh"){
        ls.lang = "zh";
    }else if(lang == "en"){
        ls.lang = "en";
    }
    // else {
    //     ls.lang = "jp";
    // }
}

//页面 HTML 整体加载完毕后再执行下列代码
window.onload = function(){
    //语言切换按钮
    var buttonZh = document.getElementById("buttonZh");
    var buttonEn = document.getElementById("buttonEn");
    // var buttonJp = document.getElementById("buttonJp");

    //遍历双语键值
    var keys = document.getElementsByClassName("keys");
    var barKeys = document.getElementsByClassName("barKeys");

    //声明计数器，适用于 keys 数组
    var i,j;

    //按钮状态变化函数
    function btnChange(){
        if(ls.lang == "zh"){
            buttonZh.style.color = "unset";
            buttonZh.style.cursor = "default";
            buttonEn.style.color = "";
            buttonEn.style.cursor = "";
            // buttonJp.style.color = "";
            // buttonJp.style.cursor = "";
        }else if(ls.lang == "en"){
            buttonZh.style.color = "";
            buttonZh.style.cursor = "";
            buttonEn.style.color = "unset";
            buttonEn.style.cursor = "default";
            // buttonJp.style.color = "";
            // buttonJp.style.cursor = "";
        }
        // else if (ls.lang == "jp") {
        //     buttonZh.style.color = "";
        //     buttonZh.style.cursor = "";
        //     buttonEn.style.color = "";
        //     buttonEn.style.cursor = "";
        //     buttonJp.style.color = "unset";
        //     buttonJp.style.cursor = "default";
        // }
    }

    //网页标题双语切换函数
    function htmlTitleSwitcher(){
        if(ls.lang == "zh"){
            document.title = "滕定康的个人主页";
        }else if(ls.lang == "en"){
            document.title = "Dingkang TENG Personal Website";
        };
        // else if (ls.lang == "jp") {
        //     document.title = "ウェブサイトの例";
        // };
    }

    //单键替代函数
    function replace(keys, before, after){
        if(keys.innerHTML == before){
            keys.innerHTML = after;
        };
    };

    //Change the display of CSS
    function displayHideUI(cssID){
        var ui=document.getElementsByClassName(cssID);
        for(var i=0; i < ui.length; i++){
            ui[i].style.display="none";
        }
    }
    function displayShowUI(cssID){
        var ui=document.getElementsByClassName(cssID);
        for(var i=0; i < ui.length; i++){
            ui[i].style.display="";
        }
    }

    //中文切换按钮的单击响应函数
    buttonZh.onclick = function(){
        ls.setItem("lang", "zh");
        switchToChinese();
        location.reload();
    };

    //英文切换按钮的单击响应函数
    buttonEn.onclick = function(){
        ls.setItem("lang", "zh");
        switchToChinese();
        location.reload();
        ls.setItem("lang", "en");
        switchToEnglish();
    };

    // //日文切换按钮的单击响应函数
    // buttonJp.onclick = function () {
    //     ls.setItem("lang", "zh");
    //     switchToChinese();
    //     location.reload();
    //     ls.setItem("lang", "jp");
    //     switchToJapanese();
    // };

    //用于遍历并替换成中文的函数
    function switchToChinese() {
        btnChange();
        //切换网页标题语言
        htmlTitleSwitcher();
        displayHideUI("en");
        displayShowUI("ch");
    };

    //用于遍历并替换成英文的函数
    function switchToEnglish() {
        btnChange();
        //切换网页标题语言
        htmlTitleSwitcher();

        //Switch the specific langage UI
        displayHideUI("ch");
        displayShowUI("en");

        //遍历替换
        for(i=0; i<keys.length; i++){
            replace(keys[i], "滕定康", "Dingkang TENG");
            replace(keys[i], "欢迎来到我的个人主页", "Welcome to my personal websites");
            replace(keys[i], "个人简介", "MY PROFILE");
            replace(keys[i], "个人简介", "MY PROFILE");
            replace(keys[i], "电子简历下载", "Download CV");
            replace(keys[i], "科研经历", "RESEARCH EXPERIENCE");
             replace(keys[i], "2017/06—2019/06", "06/2017—06/2019");
            replace(keys[i], "国家级大学生创新创业训练计划", "Innovation Leadership and Entrepreneurship Internship");
            replace(keys[i], "华中农业大学", "Huazhong Agricultural University");
            replace(keys[i], "参加项目《农村宅基地有偿退出的影响因素研究——基于湖北省宜城市宅基地改革试点区的实证》", 
                "Study on influencing factors of paid withdrawal of homestead"
            );
            replace(keys[i], "设计问卷，评估宅基地有偿退出的影响因素；", 
                "Designed questionnaires to assess of influencing factors of residents\' opinion on homestead paid withdrawal."
            );
            replace(keys[i], "利用层次分析法分析并解释调查结果，从而得出各因素的影响程度；", 
                "Utilized AHP for in-depth data analysis and to dissect and interpret the accumulated data, thereby drawing accurate and weighted conclusions."
            );
            replace(keys[i], "综合收集的数据和发现。起草调查报告。", 
                "Synthesized the collected data and findings. Drafted a detailed, evidence-based report."
            );
            replace(keys[i], "2025/12-至今", "12/2025-Present");
            replace(keys[i], "香港理工大学", "Kong Polytechnic University");
            replace(keys[i], "研究主题为智慧城市的技术创新、基础设施规划和政策制定", 
                "Focusing on Technology innovation, Infrastructure planning and Policy making in Smart Cities"
            );
            replace(keys[i], "收集并分析可视化全球电动汽车市场、政策和充电基础设施，并提供可视化成果",
                "Collecting, analyzing, visualizing the electric vehicle market, policy and charging infrastructure across the globe."
            );
            replace(keys[i], "主要成果", "PUBLICATION");
            replace(keys[i], "工作经验", "WORKING EXPERIENCE");
            replace(keys[i], "永业行土地房地产资产评估有限公司", "Realhom Land Real Estate Assets Appraisal Co., Ltd");
            replace(keys[i], "2018/10—2024/06", "10/2018-06/2024");
            replace(keys[i], "技术经理", "Technical Manager");
            replace(keys[i], "主要负责自然资源调查和评估中的技术工作，并为部门提供部分IT支持。包括数据分析、数据库建设、地图绘制和部门GIS培训。", 
                "Managed advanced engineering tasks with focus on natural resource survey and evaluation, IT support, and led geography information initiatives including data analysis, database construction, mapping, and GIS training."
            );
            replace(keys[i], "负责部门“国有农业用地使用权评估方法”课题项目。", 
                "Conducted a comprehensive study on the evaluation method for state-owned agricultural land use rights."
            );
            replace(keys[i], "负责部门中开放ArcGIS自动计算和处理工具，旨在提高相关项目的效率和准确性。", 
                "Spearheaded the secondary development of an automated calculation and processing tool in ArcGIS designed to enhance efficiency and accuracy within natural resource projects."
            );
            replace(keys[i], "项目经验", "PROJECT EXPERIENCE");
            replace(keys[i], "2023/06—2024/06", "06/2023—06/2024");
            replace(keys[i], "国有农用地基准地价及土地定级", "Land Classification & Standard Price in Collective Agricultural Land");
            replace(keys[i], "项目负责人", "Project Leader");
            replace(keys[i], "主要负责黄石市城区（含开发区·铁山区）公示地价体系更新项目中的国有农用地部分。工作内容主要包括空间分析、土地定级、土地估价和向部门提供与GIS相关的技术支持等。", 
                "Led spatial analysis, rank classification, price estimation and GIS related processes."
            );
            replace(keys[i], "2019/09-2024/06", "09/2019-06/2024");
            replace(keys[i], "评估项目", "Appraisal & Evaluation Programs");
            replace(keys[i], "助理估价师", "Assistant Appraiser");
            replace(keys[i], "负责估价报告、咨询报告的测算及撰写，参与了200多个土地和房地产相关的评估项目，包括价格评估、风险评估等。", 
                "Responsible for calculation and reports, participated in more than 200 land and real estate appraisal projects and risk assessment."
            );
            replace(keys[i], "2020/12-2024/06", "12/2020-06/2024");
            replace(keys[i], "自然资源资产清查", "Natural Resource Asset Inventory of Tieshan and Daye");
            replace(keys[i], "主要负责黄石市铁山区、大冶市的自然资源资产清查项目（包括第二批试点及第三批试点），包括数据整合、价格测算、建库、结果汇总和制图等任务。", 
                "Managed price calculation, database creation, result summarization, and mapping tasks."
            );
            replace(keys[i], "为鄂东分部、粤海分部的黄冈市、海口市等其他城市的自然资源资产清查项目提供技术指导。", 
                "Provided guidance to teams working in other cities, including Huangang and Haikou."
            );
            replace(keys[i], "2020/12-2023/12", "12/2020—12/2023");
            replace(keys[i], "中国城市地价动态监测项目", "China\'s Urban Land Price Dynamic Monitoring of Huangshi");
            replace(keys[i], "主要负责黄石市城市地价动态监测，包括数据分析，撰写报告等任务。", 
                "Responsible for data analysis and authored comprehensive reports."
            );
            replace(keys[i], "2021年项目成果获得原湖北省国土空间规划院优秀评级。", 
                "Received the 2021 Excellence Award from the provincial department."
            );
            replace(keys[i], "主要活动及荣誉", "ACTIVITIES AND HONORS");
            replace(keys[i], "时间", "TIME PERIOD");
            replace(keys[i], "活动或荣誉内容", "ACTIVITIES OR HONORS");
            replace(keys[i], "职位或奖项", "POSITION OR REWARD");
            replace(keys[i], "于土地研究协会策划举办了新生舞会、校园规划大赛等活动", 
                "Orchestrated the College Freshmen Party and the Campus Planning Competition"
            );
            replace(keys[i], "协会会长", "Association Chair");
            replace(keys[i], "华中农业大学“永业行杯”土地资源管理本科生村级土地利用规划技能大赛", 
                "Yongyehang Cup Undergraduate land use planning competition"
            );
            replace(keys[i], "一等奖", "First prize");
            replace(keys[i], "“华夏土地杯”第一届全国大学生土地利用规划技能大赛", 
                "Chinese Land Cup national undergraduate land use planning competition"
            );
            replace(keys[i], "二等奖", "Second prize");
            replace(keys[i], "第二届全国土地资源管理专业大学生不动产估价技能大赛", 
                "National college students real estate appraisal competition"
            );
            replace(keys[i], "三等奖", "Third prize");
            replace(keys[i], "2017年暑期社会实践“先进个人”", 
                "2017 summer practice of Huazhong Agricultural University"
            );
            replace(keys[i], "荣誉称号", "Outstanding Individual");
            replace(keys[i], "华中农业大学第二届“苍穹数码杯”土地信息系统技能竞赛", 
                "KQ Geo Technologies Cup GIS competition"
            );
            replace(keys[i], "第二届“中海达”杯测量大赛四等水准测量学生裁判", 
                "The Second Hi-Target Cup Surveying Competition"
            );
            replace(keys[i], "学生裁判", "Student Referee");
            replace(keys[i], "通过了四六级考试，托福网考100分（阅读：28，听力：28，口语：21，写作：23）；", 
                "TOFEL iBT: 100 (Reading: 28, Listening: 28, Speaking: 21, Writing: 23). "
            );
            replace(keys[i], "能够熟练使用计算机及相关故障的排除，拥有一定网络工程经验；能熟练运用Microsoft Office办公软件；", 
                "Proficient in using computers and troubleshooting and familiar with network projects. Skilled in Microsoft Office software."
            );
            replace(keys[i], "能熟练运用ArcGIS、AutoCAD、SPSS等相关专业软件；已取得中国大陆及香港驾照；", 
                "Proficient at ArcGIS, AutoCAD, SPSS and other specialist software. Obtained driving licenses in Mainland China and Hong Kong."
            );
            replace(keys[i], "拥有A类业余电台操作证书。","");
            replace(keys[i], "技能", "Other Skill");
            replace(keys[i], "联系方式", "Contact Infomation");
            replace(keys[i], "电话", "Tel.");
            replace(keys[i], "点击访问", "Click to access");
        };

        for(j=0; j<barKeys.length; j++){
            replace(barKeys[j], "个人简介", "PROFILE");
            replace(barKeys[j], "科研经历", "RESEARCH");
            replace(barKeys[j], "主要成果", "PUBLICATION");
            replace(barKeys[j], "工作经验", "WORKING");
            replace(barKeys[j], "项目经验", "PROJECTS");
            replace(barKeys[j], "活动荣誉", "ACTIVITIES & HONORS");
            replace(barKeys[j], "快捷方式", "LINKS");
        }
    };

    // //用于遍历并替换成日文的函数
    // function switchToJapanese() {
    //     btnChange();
    //     //切换网页标题语言
    //     htmlTitleSwitcher();

    //     //遍历替换
    //     for(i=0; i<keys.length; i++){
    //         replace("这是一行用于演示的文本。", "これはテキストの例です。");
    //     }
    // };

    //根据 LocalStorage 存储的值判定当前应该显示的语言
    if(ls.lang == "zh"){
        switchToChinese();
    }else if(ls.lang == "en"){
        switchToEnglish();
    }
    // else if(ls.lang == "jp"){
    //     switchToJapanese();
    // }
}

//Authour: https://github.com/ZexWoo/JavaScript-i18n