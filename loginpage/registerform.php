<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register form</title>
    <link rel="stylesheet" href=css/style.css>
</head>
<body>
<div class="form-container">
    <form action="" method="p">
        <h3>register now</h3>
        <input type="text" name="name" request placeholder= "enter your name">
        <input type="email" name="email" request placeholder= "enter your email">
        <input type="password" name="password" request placeholder= "enter your password">
        <select name="user_type">
            <option value="user">user</option>
            <option value="admin">admin</option>
        </select>
        <input type="submit" value="register now" class="form-btn">
        <p>already have an account? <a href="login_form.php"></a></p>

    </form>
</div>
</body>
</html>