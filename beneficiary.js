        // Data and next drive 
      var date = new Date();
      todaydate = date.toDateString(); 
      document.getElementById("date").innerHTML = " Today's Date : <b>" + todaydate + "</b>";
      var nextWeek = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
      $('.nextdate').html("The next drive will be on : <b>"+nextWeek.toDateString()+"</b>");
      var count=0;

      //Build an array containing Customer records.
      var customers = new Array();
      customers.push(["Maharastra" ,"1236457890", "Khan" , 3]);
      customers.push(["Maharastra" ,"5412368790", "Mudassar Khan" , 4]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"1236417890", "Adi" , 3]);
      customers.push(["Gujrat" ,"5412568790", "Mud" , 4]);
      customers.push(["Maharastra" ,"9832229410", "Kaushik" , 3]);
      customers.push(["Maharastra" ,"1235557890", "Han" , 3]);
      customers.push(["Maharastra" ,"5414528790", "Sar Khan" , 4]);
      customers.push(["Maharastra" ,"5412368790", "Mudassar Khan" , 4]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"1236417890", "Adi" , 3]);
      customers.push(["Maharastra" ,"9832229410", "Kaushik" , 3]);
      customers.push(["Maharastra" ,"1235557890", "Han" , 3]);
      customers.push(["Maharastra" ,"5412368790", "Mudassar Khan" , 4]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"1236417890", "Adi" , 3]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"5414528790", "Sar Khan" , 4]);
      customers.push(["Maharastra" ,"5412368790", "Mudassar Khan" , 4]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"1236417890", "Adi" , 3]);
      customers.push(["Maharastra" ,"9832229410", "Kaushik" , 3]);
      customers.push(["Maharastra" ,"1235557890", "Han" , 3]);
      customers.push(["Maharastra" ,"5414528790", "Sar Khan" , 4]);
      customers.push(["Maharastra" ,"5412368790", "Mudassar Khan" , 4]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"1236417890", "Adi" , 3]);
      customers.push(["Maharastra" ,"9832229410", "Kaushik" , 3]);
      customers.push(["Maharastra" ,"1235557890", "Han" , 3]);
      customers.push(["Maharastra" ,"5412368790", "Mudassar Khan" , 4]);
      customers.push(["Gujrat" ,"9833939410", "Suzanne Mathews" , 3]);
      customers.push(["Maharastra" ,"1236417890", "Adi" , 3]);
      customers.push(["Maharastra" ,"5414528790", "Sar Khan" , 4]);
      customers.push(["Maharastra" ,"1235557890", "Han" , 3]);
      customers.push(["Maharastra" ,"5414528790", "Sar Khan" , 4]);
      customers.push(["Maharastra" ,"9833001410", "Mat" , 3]);

      var i = customers.length;
    //   console.log(i);
      
      var packetsum = 0;

      while (i--) {
        packetsum += customers[i][3];
      }
      
      for(var i=0;i<customers.length;i++)
      {
        var tableString = "<tr>";
        tableString += "<td>" + (i+1) + "</td>";
        tableString += "<td><a data-toggle=\"modal\" data-target=\"#datamodal\">" + customers[i][0] + "</a></td>";
        tableString += "<td><a data-toggle=\"modal\" data-target=\"#datamodal\">" + customers[i][2] + "</a></td>";
        tableString += "<td><a data-toggle=\"modal\" data-target=\"#datamodal\">" + customers[i][1] + "</a></td>";
        tableString += "<td><a data-toggle=\"modal\" data-target=\"#datamodal\">" + customers[i][3] + "</a></td>";
        tableString += "<td>" + "<button data-toggle=\"modal\" data-target=\"#imagemodal\"><img width=\"40\" height=\"40\" src=\"logo.png\" alt=\"img\"></button>" + "</td>";
        tableString += "</tr>";
        // console.log(tableString);
        $('table tbody').append(tableString);
    }
  

      var totalbene = document.getElementById("totalbene");
      totalbene.innerHTML = customers.length;
      
      var totalpackets = document.getElementById("totalpackets");
      totalpackets.innerHTML = packetsum;

      var x = document.getElementById("jstabledata").rows.length;
      console.log(x);

      // dynamic phone no search
      $(document).ready(function(){
      $("#phonenosearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        console.log(value);
        var count = 0;

       
        $("#jstable tbody tr").filter(function() {
          
            if($(this).text().toLowerCase().indexOf(value) == -1){
                
                    document.getElementById("newreg").innerHTML = "Phone number not found ! Click the <i style=\"color:black;\" class=\"fa fa-plus-circle fa-x\" aria-hidden=\"true\"></i> to register new beneficiary.";

                     $("#addbeneficiary").prop('disabled', false);
                     
                    } 
                  
                  else{
                    document.getElementById("newreg").innerHTML = "";
  
                     $("#addbeneficiary").prop('disabled', true);
                    
                  }
        });
      });
    });

    // ------------------------------------------------------------- search field access
    var table = $('#jstable').DataTable({
      // searching: false,
      lengthChange : false,
      responsive: true
    });

    //  $('#jstable').on('search.dt', function (e, settings) {
    //    console.log(table.column().search( this.value ));
    // })

    $('#phonenosearch').on( 'keyup', function () {
      table
          .columns( 3 )
          .search( this.value )
          .draw();
  } );
    function newreg() {
      window.location = 'register.html' ;
    }
    // console.log($('#jstable tbody tr'));

    $("#jstable tbody tr").click(function (e) {
      
      var td = $(this).children("td").map(function() {
        return $(this).text();
    }).get();

      $.cookie("details", td);
      window.location.href = "beneficiarydetails.html";
      
     console.log(td);
     sessionStorage.setItem('myArray', td);

    //  window.location = 'beneficiarydetails.html' ;

   });
