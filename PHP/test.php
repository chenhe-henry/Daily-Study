<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $welcome_msg = "Hello,Chen.<br/>";
    echo $welcome_msg;
    echo "I'd like to say $welcome_msg <br/>";
    echo "<h1>This is fun</h1> <br/>";
    echo "Study PHP" . $welcome_msg . "there <br/>";
    print "Ho <br/>";
    $x = 9527;
    var_dump($x);
    $y = 932.12;
    var_dump($y);
    var_dump($welcome_msg);
    echo strlen("hello");
    echo str_word_count("nice");
    echo strrev("nice to meet you");
    echo strpos("Hello world excecs!", "exce");
    ?>
</body>
</html>