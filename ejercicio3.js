fecha=new Date()
console.log(fecha)
cumpleanyos=new Date('july,14,1969')
console.log(cumpleanyos)
esmastarde=true
if (fecha<cumpleanyos){
    esmastarde=false
}else{
    esmastarde=true
}
console.log(esmastarde)
let dia=cumpleanyos.getDate()
let mes=cumpleanyos.getMonth()+1
let anyo=cumpleanyos.getFullYear()
console.log(dia,mes,anyo)
