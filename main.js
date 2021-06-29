Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "evironment"
    }
   });

   Camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("preview").innerHTML = '<img id="snapped" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function Check()
{
    img = document.getElementById("snapped");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
    }
}