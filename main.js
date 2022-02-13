Webcam.set
({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='captured_image' src= " + data_uri + "/>";
    });
}
console.log("ml5 version:" + ml5.version);
function modelLoaded()
{
    console.log("model loaded!");
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ENC_n_omh/model.json', modelLoaded);
function speak()
{
    var speak = window.speechSynthesis;
    speach_data1 = "The first prediction is " + prediction1;
    speach_data2 = "The second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speach_data1 + speach_data2);
    synth.speak(utterThis)
}
function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult()
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(results[0].label == "Pointing")
        {
            document.getElementById("update_emoji").innerHTML = "&#128072; &#128073;";
        }
        if(results[0].label == "OK")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "Crossed Fingers")
        {
            document.getElementById("update_emoji").innerHTML = "&#129310;";
        }
        if(results[0].label == "Thumbs Up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "Thumbs Down")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        if(results[1].label == "Pointing")
        {
            document.getElementById("update_emoji").innerHTML = "&#128072; &#128073;";
        }
        if(results[1].label == "OK")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[1].label == "Crossed Fingers")
        {
            document.getElementById("update_emoji").innerHTML = "&#129310;";
        }
        if(results[1].label == "Thumbs Up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[1].label == "Thumbs Down")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
    }
}
