const absBtn = document.querySelector('#abs')
const upperBodyBtn = document.querySelector('#upper-body')
const lowerBodyBtn = document.querySelector('#lower-body')

function absWorkoutBtn(event){
    if(absBtn){
        alert('Keep it simple! The best workout to shred your abs is by far the most boring. Do this3-5 times per week! 3 sets of 3 one minute planks. One regular and two side planks. 15 second rest in between.')
    }
}
absBtn.addEventListener('click', absWorkoutBtn)

function upperBodyWorkoutBtn(event){
    if(upperBodyBtn){
        alert('This one is a great workout for men and women! 2-4 sets. 8-12 reps per exercise. Curcuit through incline dumbbell press, shoulder front raises, and arnold curl.')
    }
}
upperBodyBtn.addEventListener('click', upperBodyWorkoutBtn)

function lowerBodyWorkoutBtn(event){
    if(lowerBodyBtn){
        alert('LEG DAY! 2-4 sets. 8-12 reps per exercise. Curcuit through split squats, sumo squats, and walking lunges. ')
}
}
lowerBodyBtn.addEventListener('click', lowerBodyWorkoutBtn)
