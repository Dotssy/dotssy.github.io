<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
// ----------------------------config-------------------------- // 
$adminemail = "azarez0089@gmail.com";
$backurl=$_SERVER['HTTP_REFERER'] ;  // Home page in format yoursite.domain/#openModal
//---------------------------------------------------------------------- // 
// Data from form
$name = $_POST['name'];

$mail = $_POST['mail'];

$message = $_POST['message'];

$msg = "

Name: $name

Email: $mail

Message: $message

";
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 4000); 
//-->
</script> 
 
 <script language='Javascript'>
 alert('Mail Send!');
 </script>



";  

mail("$adminemail" , "Message from $name" , "$msg");

exit;

?>
</body>
</html>