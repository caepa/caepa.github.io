<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script type="text/javascript">
  google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var chart = new google.visualization.Timeline(document.getElementById('October23'));
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Bentley Upstairs', 'Adam Springwater, ETS High School Equivalency Testing (HiSET®) Program Updates',    new Date(2018,09,23,09,45,0), new Date(2018,09,23,10,30,0) ],
      [ 'Bentley Upstairs', 'Liz Lanphear, Promises Kept: GED® Innovation: New Tools and Resources for Students and Educators, and Updates on GEDWorks, Student Outcomes and Postsecondary Success',    new Date(2018,09,23,10,45,0), new Date(2018,09,23,11,30,0) ],
      [ 'Bentley Upstairs', 'Martin Loa, Burlington English Career Exploration and Soft Skills',    new Date(2018,09,23,13,15,0), new Date(2018,09,23,14,00,0) ],
      [ 'Bentley Upstairs', 'Sarah Wilins, KTE Online Tools for Test and Wordpress',    new Date(2018,09,23,15,00,0), new Date(2018,09,23,15,45,0) ],

      [ 'Ballroom A', 'Allie Needham, Using Online Distance Learning with Adult ESL Students to Enhance Program Outcomes',          new Date(2018,09,23,09,45,0), new Date(2018,09,23,10,30,0) ],
      [ 'Ballroom A', 'Stephanie Lindberg, Teaching Teacher to Tech',          new Date(2018,09,23,10,45,0), new Date(2018,09,23,11,30,0) ],
      [ 'Ballroom A', 'Steve Wright, Youth Workforce',          new Date(2018,09,23,13,15,0), new Date(2018,09,23,14,00,0) ],

      [ 'Ballroom B', 'Teona Shainidze Kerbs, Facilitation multi-level and disciplinary class',          new Date(2018,09,23,09,45,0), new Date(2018,09,23,10,30,0) ],
      [ 'Ballroom B', 'Anne Petti and Valerie Gantzler, A Tale of Two Career Pathway Programs',          new Date(2018,09,23,10,45,0), new Date(2018,09,23,11,30,0) ],
      [ 'Ballroom B', 'Tara Kelly, Practice for Knowledge Acquisition Towards GED Success',          new Date(2018,09,23,13,15,0), new Date(2018,09,23,14,00,0) ],
      [ 'Ballroom B', 'Chelsea Beard, Disability Employment Initiatives',          new Date(2018,09,23,15,00,0), new Date(2018,09,23,15,45,0) ],

      [ 'Ballroom C', 'Jessie Hawthorn, Online Learning - Yes You Can - Part I',          new Date(2018,09,23,09,45,0), new Date(2018,09,23,10,30,0) ],
      [ 'Ballroom C', 'Jessie Hawthorn, Online Learning - Yes You Can - Part II',          new Date(2018,09,23,10,45,0), new Date(2018,09,23,11,30,0) ],
      [ 'Ballroom C', 'Danielle Ongart--Innovation and Action - Part I',          new Date(2018,09,23,13,15,0), new Date(2018,09,23,14,00,0) ],
      [ 'Ballroom C', 'Danielle Ongart, Innovation and Action - Part II',          new Date(2018,09,23,15,00,0), new Date(2018,09,23,15,45,0) ],

      [ 'Ballroom CD', 'Breakfast & Welcome',         new Date(2018,09,23,07,45,0), new Date(2018,09,23,8,15,0) ],
      [ 'Ballroom CD', 'Keynote Speakers Retired Colonel Baerbel Merrill & Representative Phil Covarrubias',         new Date(2018,09,23,8,15,0), new Date(2018,09,23,9,30,0) ],
      [ 'Ballroom CD', 'Lunch, Awards & Keynote Speaker Rachel Brownlee',         new Date(2018,09,23,11,45,0), new Date(2018,09,23,13,00,0) ],

      [ 'Grand Ballroom Foyer CD', 'Snack in Vendor Hall',         new Date(2018,09,23,14,00,0), new Date(2018,09,23,15,00,0) ],

      [ 'Ballroom D1', 'Danielle Ongart, AEI Team Meet and Greet',         new Date(2018,09,23,09,45,0), new Date(2018,09,23,10,30,0) ],
      [ 'Ballroom D1', 'George & Rachel, Learner Ambassador Panel',         new Date(2018,09,23,10,45,0), new Date(2018,09,23,11,30,0) ],
      [ 'Ballroom D1', 'Brenda Gierczka, CCRS Math & Language Arts',         new Date(2018,09,23,13,15,0), new Date(2018,09,23,14,00,0) ],
      [ 'Ballroom D1', 'Donna Kapp, Learning is Hard',         new Date(2018,09,23,15,00,0), new Date(2018,09,23,15,45,0) ],
      ]);

    var options = {
      timeline: { colorByRowLabel: true },
      height: 350,
    };

    chart.draw(dataTable, options);
  }
</script>

<script type="text/javascript">

  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var chart = new google.visualization.Timeline(document.getElementById('October24'));
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Bentley Upstairs', 'Talya Clay, 21st Century Success with National Geographic',       new Date(2018,09,24,09,45,0),  new Date(2018,09,24,10,30,0) ],
      [ 'Bentley Upstairs', 'COABE & CAEPA, Benefits of Membership in our Professional Association',    new Date(2018,09,24,10,45,0),  new Date(2018,09,24,11,30,0) ],
      [ 'Bentley Upstairs', 'Tara Kelly, Practice for Knowledge Acquisition Towards GED Success',        new Date(2018,09,24,13,15,0),  new Date(2018,09,24,14,00,0) ],
      [ 'Bentley Upstairs', 'Leann Kaiser, I am not a Theory',    new Date(2018,09,24,14,15,0), new Date(2018,09,24,15,00,0) ],

      [ 'Ballroom A', 'Stephanie Lindberg, Teaching Teachers to Tech',             new Date(2018,09,24,09,45,0),  new Date(2018,09,24,10,30,0) ],
      [ 'Ballroom A', 'Debbie Goldman, Expanding your ESL Toolkit',          new Date(2018,09,24,10,45,0),  new Date(2018,09,24,11,30,0) ],
      [ 'Ballroom A', 'Dorothea Stienke, How Big is it',              new Date(2018,09,24,13,15,0),  new Date(2018,09,24,14,00,0) ],
      [ 'Ballroom A', 'Alex Soto, Engaging Learners with Social Media',          new Date(2018,09,24,14,15,0), new Date(2018,09,24,15,00,0) ],

      [ 'Ballroom B', 'Valerie Gantzler, Who’s Your Data Part II',             new Date(2018,09,24,09,45,0),  new Date(2018,09,24,10,30,0) ],
      [ 'Ballroom B', 'George O’clair, Trade Council Classes Panel',          new Date(2018,09,24,10,45,0),  new Date(2018,09,24,11,30,0) ],
      [ 'Ballroom B', 'Anne Petti & Valerie Gantzler, A Tale of Two Career Pathway Programs',              new Date(2018,09,24,13,15,0),  new Date(2018,09,24,14,00,0) ],
      [ 'Ballroom B', 'Ellen Klement, Emotions in Motion',          new Date(2018,09,24,14,15,0), new Date(2018,09,24,15,00,0) ],

      [ 'Ballroom C', 'Steven Gold, Universal Design',             new Date(2018,09,24,09,45,0),  new Date(2018,09,24,10,30,0) ],
      [ 'Ballroom C', 'Marsea Wynne, Career Path-ways Navigators Meeting',          new Date(2018,09,24,10,45,0),  new Date(2018,09,24,11,30,0) ],
      [ 'Ballroom C', 'George O’Clair, Brenda Zion Education working inside a corporation',              new Date(2018,09,24,13,15,0),  new Date(2018,09,24,14,00,0) ],

      [ 'Ballroom CD', 'Breakfast & Welcome',                                        new Date(2018,09,24,08,00,0), new Date(2018,09,24,8,30,0) ],
      [ 'Ballroom CD', 'Keynote Speakers Danielle Ongart & Dr. Misty Stroud',         new Date(2018,09,24,08,30,0), new Date(2018,09,24,9,45,0) ],
      [ 'Ballroom CD', 'Lunch & Keynote Speaker Kathryn Wisner',                     new Date(2018,09,24,11,45,0), new Date(2018,09,24,13,00,0) ],

      [ 'Ballroom D1', 'Cedric Lindsay & Sarah Secrist, Growth Mindset',            new Date(2018,09,24,09,45,0),  new Date(2018,09,24,10,30,0) ],
      [ 'Ballroom D1', 'Leann Kaiser, Experiental Learning',         new Date(2018,09,24,10,45,0),  new Date(2018,09,24,11,30,0) ],
      [ 'Ballroom D1', 'Kathryn Wisner, K-12 school district lingo',             new Date(2018,09,24,13,15,0),  new Date(2018,09,24,14,00,0) ],
      [ 'Ballroom D1', 'Kathryn Wisner, ABE Programs',         new Date(2018,09,24,14,15,0), new Date(2018,09,24,15,00,0) ],

      ]);

    var options = {
      timeline: { colorByRowLabel: true },
      height: 350,
    };

    chart.draw(dataTable, options);
  }

</script>

<p>Tuesday, October 23, 2018</p>
<div id="October23"></div>

<p>Wednesday, October 24, 2018</p>
<div id="October24"></div>
