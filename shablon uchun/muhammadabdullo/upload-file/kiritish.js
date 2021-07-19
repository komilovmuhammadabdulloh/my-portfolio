const inpFile = document.getElementById('inpFile')
const previewContainer = document.getElementById('imagePreview')
const previewContainer1 = document.getElementById('imagePreview1')
const previewImage = previewContainer.querySelector('.image-preview__image')
const previewImage1 = previewContainer1.querySelector('.image-preview__image')
const previewDefaultText = previewContainer.querySelector('.image-preview__default-text')
const previewDefaultText1 = previewContainer1.querySelector('.image-preview__default-text')
const button = document.getElementById('button')
const input = document.getElementById('input')
const textarea = document.getElementById('textarea')
const  name1 = document.getElementById('name1')
const name2 = document.getElementById("name2")

const cardnum = document.getElementById('karta')
const  cardnum1 = document.getElementById('cardnum1')
const pochta = document.getElementById('pochta')
const pochta1 = document.getElementById('pochta1')


inpFile.addEventListener('change', function () {
    const file = this.files[0]
// joylayotgan maxsulotimizning cartasi bu
    if (file) {
        const  reader = new FileReader()

        previewDefaultText.style.display = "none"
        previewImage.style.display = "block"

        reader.addEventListener('load', function () {

            console.log(this)

            previewImage.setAttribute('src', this.result)
            // previewImage1.setAttribute('src', this.result)

        })

        reader.readAsDataURL(file)

    }

    else {
        alert('File tog\'ri yuklanganiga ishonchiz komilmi qayta tekshirib koring ')

        // previewDefaultText.style.display = null
        // previewImage.style.display = null
        // previewImage.setAttribute('src', "")
    }


// joylana yotgan karta bu
    if (file) {
        const  reader = new FileReader()

        previewDefaultText1.style.display = "none"
        previewImage1.style.display = "block"

        reader.addEventListener('load', function () {

            console.log(this)

            previewImage1.setAttribute('src', this.result)

        })

        reader.readAsDataURL(file)

    }
})
input.onkeyup = function () {
    console.log('key up')
    name1.innerText = input.value

}

textarea.onkeyup = function () {
    name2.innerText = textarea.value
}

cardnum.onkeyup = function () {

    cardnum1.innerText = cardnum.value
    console.log(cardnum.value)

}
pochta.onkeyup = function () {
    pochta1.innerText = pochta.value
    console.log(pochta.value)
}







