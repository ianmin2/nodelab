var os_specs = function( filename ){

    var specs = "";
    var os = require('os');
    var fs = require('fs');
    var content = '';
    var l = os.EOL;

    content += "[PLATFORM]" + l;
    content += "OS type: " + os.platform() + l;
    content += "OS version: " + os.release() + l;
    content += "OS architecture: " + os.arch() + l;
    content += l;
    content += "[MEMORY]" + l;
    content += "Total (Bytes): " + os.totalmem() + l;
    content += "Free (Bytes): " + os.freemem() + l;
    content += "Free (%): " + ( ( os.freemem() / os.totalmem() ) * 100 ).toFixed(2) + l;
    content += l;
    content += "[CPUs]" + l;
    content += "No. of CPUs: " + os.cpus().length + l;
    content += "CPU type: " + os.cpus()[0].model + l;
    
    fs.writeFile( filename, content, function( err ){
       
        
        if( err ){
            
            specs = "<h1>:-( </h1>THIS APPLICATION FAILED TO WRITE TO THE SPECIFIED FILE!<br><br><b>common causes</b> <p> Incorrect file specification e.g {try ./filename.extension in linux and MAC OS}</p> <p>Insufficient access permissions to read and write to files ( try elevated mode )</p>";
            
        }else{
            
            fs.readFile( filename, function( err, fc ){
                if( err ){
                    specs  = "<h1>:-( </h1>FAILED TO READ THE REQUIRED SYSTEM FILE!";
                    
                    delete os;
                    delete fs;
                    delete content;
                    delete l;
                    delete filename;

                    document.getElementById('osinfo').innerHTML = specs;
                    delete specs;
                    
                }else{
                    
                    specs = fc.toString().replace( new RegExp( l , 'g'), '<br>' ) ;
                               
                    delete os;
                    delete fs;
                    delete content;
                    delete l;
                    delete filename;

                    document.getElementById('osinfo').innerHTML = specs;
                    delete specs;
                
                }
            } );
            
        }
        
    });
    
}


