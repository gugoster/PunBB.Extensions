function xGetElementById(e)
{
  if(typeof(e)=='string') {
    if(document.getElementById) e=document.getElementById(e);
    else if(document.all) e=document.all[e];
    else e=null;
  }
  return e;
}

function xDef()
{
  for(var i=0; i<arguments.length; ++i){if(typeof(arguments[i])=='undefined') return false;}
  return true;
}

function showhide(e)
{
  if(!(e=xGetElementById(e))) return null;
  if(e.style && xDef(e.style.display)) {
    if(e.style.display == 'none' || e.style.display == '') e.style.display='block'
    else e.style.display='none';
    return e.style.display;
  }
  return null;
}
