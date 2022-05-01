function populat(selectObj)
{
// get the index of the selected option 
var idx = selectObj.selectedIndex; 
// get the value of the selected option 
var which = selectObj.options[idx].value;
if(which=='Q1'||which=='Q2')
{
const box=document.getElementById("Q1_id");
box.setAttribute('name',which);
}

else if(which=='Q1_a'||which=='Q2_a')
{
const box1=document.getElementById('Q1_a_id');
box1.setAttribute('name',which);
}
else if(which=='Q1_b'||which=='Q2_b')
{
const box2=document.getElementById('Q1_b_id');
box2.setAttribute('name',which);
}

else if(which=='Q3'||which=='Q4')
{
const box=document.getElementById("Q3_id");
box.setAttribute('name',which);
}

else if(which=='Q3_a'||which=='Q3_a')
{
const box1=document.getElementById('Q3_a_id');
box1.setAttribute('name',which);
}
else if(which=='Q3_b'||which=='Q3_b')
{
const box2=document.getElementById('Q3_b_id');
box2.setAttribute('name',which);
}

else if(which=='Q5'||which=='Q6')
{
const box=document.getElementById("Q5_id");
box.setAttribute('name',which);
}

else if(which=='Q5_a'||which=='Q6_a')
{
const box1=document.getElementById('Q5_a_id');
box1.setAttribute('name',which);
}
else if(which=='Q5_b'||which=='Q6_b')
{
const box2=document.getElementById('Q5_b_id');
box2.setAttribute('name',which);
}


else if(which=='Q1'||which=='Q2')
{
const box=document.getElementById("Q1_id");
box.setAttribute('name',which);
}

else if(which=='Q1_a'||which=='Q2_a')
{
const box1=document.getElementById('Q1_a_id');
box1.setAttribute('name',which);
}
else if(which=='Q1_b'||which=='Q2_b')
{
const box2=document.getElementById('Q1_b_id');
box2.setAttribute('name',which);
}

else if(which=='Q3'||which=='Q4')
{
const box=document.getElementById("Q3_id");
box.setAttribute('name',which);
}

else if(which=='Q3_a'||which=='Q3_a')
{
const box1=document.getElementById('Q3_a_id');
box1.setAttribute('name',which);
}
else if(which=='Q3_b'||which=='Q3_b')
{
const box2=document.getElementById('Q3_b_id');
box2.setAttribute('name',which);
}

else if(which=='Q5'||which=='Q6')
{
const box=document.getElementById("Q5_id");
box.setAttribute('name',which);
}

else if(which=='Q5_a'||which=='Q6_a')
{
const box1=document.getElementById('Q5_a_id');
box1.setAttribute('name',which);
}
else if(which=='Q5_b'||which=='Q6_b')
{
const box2=document.getElementById('Q5_b_id');
box2.setAttribute('name',which);
}
}