const string="hello!";
shout(string);
function shout(string)
{
return string.toUpperCase();
}
whisper(string);
function whisper(string)
{
    return string.toLowerCase();

}
let spy = logShout(string);
function logShout(string)
{
    console.log(string.toUpperCase());
}
 spy=logWhisper(string);
function logWhisper(string)
{
    console.log(string.toLowerCase());
}
sayHiToHeadphonedRoommate(string);
function sayHiToHeadphonedRoommate(string)
{
    if (string===string.toLowerCase())
    {
        return(`I can't hear you!`);

    }
    else if (string===string.toUpperCase())
    {
        return(`YES INDEED!`);
    }
    else
    {
        return(`I would love to!`);
    }
}