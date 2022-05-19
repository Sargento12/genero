function carregar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('idade')
  var res = document.getElementById('res')
  var genero = document.getElementsByName('genero')
  var img = document.getElementById('foto')
  var idade = ano - Number(fano.value)
  var resp = ''
  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO]Verifique novamente os dados')
  }
  else{
  if (genero[0].checked) {
    resp = 'um homem'
    img.src = 'https://th.bing.com/th/id/R.71b544616eb8a0d95ced003c3cae844c?rik=GmG%2fMM2ipibCDA&pid=ImgRaw&r=0'
  } else if (genero[1].checked) {
    resp = 'uma lava louça Brastemp'
    img.src = 'https://th.bing.com/th/id/R.dbf9fddbe864ae0b4aa42e5aa1157bfb?rik=S9tGJhyD%2bvIatQ&pid=ImgRaw&r=0'
  } else {
    resp = 'um Celta rebaixado'
    img.src = 'https://4.bp.blogspot.com/-bcNSii5WSXY/Vumnfv433iI/AAAAAAAAMK4/ewismz9VrRAX7h7195KY3K_3aw3SNjZig/s1600/IMG_2423.JPG'
  }
  res.innerHTML = `Entendido,você é ${resp} de ${idade} anos`
}
}
