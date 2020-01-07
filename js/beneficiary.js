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
      //   var x = document.getElementById("jstabledata").rows.length;
      //   console.log(x);
        
              // To display the sum of packets
  
      // var totaldata = "<hr><tr><td>" + sum + "</td><td>" +"  "+ "</td><td>" +" "+ "</td><td>" + packetsum + "</td></tr>";
      //   var totaldata = "<tr>";
      //     totaldata += "<td><hr>" + (customers.length) + "</td>";
      //     totaldata += "<td>" + " " + "</td>";
      //     totaldata += "<td>" + " " + "</td>";
      //     totaldata += "<td>" + " " + "</td>";
      //     totaldata += "<td><hr>" + packetsum + "</td>";
      //     totaldata += "<td>" + " " + "</td>";
      //     totaldata += "</tr>";
      //   $('table tbody').append(totaldata);
  
        var x = document.getElementById("jstabledata").rows.length;
        console.log(x);
  
        // dynamic phone no search
        $(document).ready(function(){
        $("#phonenosearch").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          console.log(value);
          var count = 0;
          $("#jstable tbody tr").filter(function() {
              console.log($(this).text().toLowerCase().indexOf(value));
              if($(this).text().toLowerCase().indexOf(value) == -1){
                  count ++;
                  console.log(count);
              }
              if(count == (customers.length)){
                  var retVal = confirm("Phone number not found. Do you want to register ?");
                  if( retVal == true ) {
                      console.log("hi");
                      
                      window.location = 'reg.html'
                  } 
                  // alert("Phone number not found "++)
              }
              else{
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
              }
          });
        });
      });
  
      // pagination
      var table = '#jstable';
      // $('#maxRows').on('change', function(){
        $('.pagination').html('')
        var trnum = 0
      //   var maxRows = parseInt($(this).val())
          var maxRows = 10;
        totalRows = $(table+' tbody tr').length;
        console.log(totalRows/2);
        $(table+' tr:gt(0) ').each(function(){
          trnum++ ;
          // console.log(trnum);
      
          // console.log($("tr").slice(0,36));
          if(trnum> maxRows)
          {
            $(this).hide()
          }
          if(trnum<= maxRows)
          {
            $(this).show()
          }
          
        })
        if(customers.length > maxRows){
          var pagenum = Math.ceil((customers.length)/maxRows)
          console.log(maxRows,customers.length , pagenum);
          
          for(var i=1;i<=pagenum;)
          {
            $('.pagination').append('<li class=\"data-page\" data-page="'+i+'">\<span class="page-link">'+ i++ +'<span class="sr-only">(current)</span></span>\</li>').show()
          }
        }
        $('.pagination li:first-child').addClass('active')
        $('.pagination li').on('click', function(){
          var pageNum = $(this).attr('data-page')
          var trIndex = 0;
          $('.pagination li').removeClass('active')
          $(this).addClass('active')
          $(table+' tr:gt(0)').each(function() {
            trIndex++
            if((trIndex > (maxRows*pageNum)) || (trIndex <= ((maxRows*pageNum)-maxRows)))
            {
              $(this).hide()
            }else{
              $(this).show()
            }
          })
        })
      // })
  
        // var table = document.getElementById("jstable");
  
        // customers.push(" "," ", sum);
        //Create a HTML Table element.
  
        // To create new table.
        // var table = document.createElement("TABLE");
        // table.border = "1";
  
        // //Get the count of columns.
        // var columnCount = customers[0].length;
        // var table = document.getElementById("jstable");
        // //Add the header row.
        // var row = table.insertRow(-1);
        // for (var i = 0; i < columnCount; i++) {
        //     var headerCell = document.createElement("TH");
        //     headerCell.innerHTML = customers[0][i];
        //     row.appendChild(headerCell);
        // }
  
        // //Add the data rows.
        // for (var i = 1; i < customers.length; i++) {
        //     row = table.insertRow(-1);
        //     for (var j = 0; j < columnCount; j++) {
        //         var cell = row.insertCell(-1);
        //         cell.innerHTML = customers[i][j];
        //     }
        // }
  
        // var dvTable = document.getElementById("dvTable");
        // dvTable.innerHTML = "";
        // dvTable.appendChild(table);