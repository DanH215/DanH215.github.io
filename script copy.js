const ArtList = [
    {
        name: "since god was a boy, YEAR, acrylic on canvas, SIZE",
        image: "IMG-20221030-WA0003.jpg",
        link: "index copy.html"
    },
    {
        name: "since god was a boy, YEAR, acrylic on canvas, SIZE",
        image: "IMG-20221030-WA0003.jpg",
        link: "index copy.html"
    },
    {
        name: "since god was a boy, YEAR, acrylic on canvas, SIZE",
        image: "IMG-20221030-WA0003.jpg",
        link: "index copy.html"
    },
    {
        name: "since god was a boy, YEAR, acrylic on canvas, SIZE",
        image: "IMG-20221030-WA0003.jpg",
        link: "index copy.html"
    },
    {
        name: "since god was a boy, YEAR, acrylic on canvas, SIZE",
        image: "IMG-20221030-WA0003.jpg",
        link: "index copy.html"
    }
]

function FillParagraphText(ParagraphText) 
{
    const para = document.createElement("p");
    para.innerText = ParagraphText;
    document.body.appendChild(para);
}

const Title = document.querySelector('h1')
console.log(Title)
Title.innerText = 'X-men';

function AddImage(ArrayElement, CurrentIndex) 
{
    const row = document.getElementsByClassName('row');
    
    console.log(row)

    // if (index < 3) 
    // {
    //     RowNumber = 1
    // }
    // else
    // {
    //     RowNumber = Math.round((index - 1)/3)
    // }

    // if (row.length > RowNumber) 
    // {
    //     const CreatedRow = document.createElement("div")
    //     CreatedRow.classList.add('row')
    //     row = document.getElementsByClassName('row');
    // }

    const CreatedColumn = document.createElement("div");
    CreatedColumn.classList.add('col-sm')

    row[CurrentIndex].appendChild(CreatedColumn)
    
    const Column = document.getElementsByClassName('col-sm');
    console.log(Column);

    const ImageToAdd = document.createElement("img");
    ImageToAdd.setAttribute("src", ArrayElement.image);
    ImageToAdd.classList.add("img-fluid");
    Column[CurrentIndex].appendChild(ImageToAdd);
    console.log(ImageToAdd)
}

for (let index = 0; index < ArtList.length; index++) 
{
    
    const container = document.getElementsByClassName('container');
    console.log(container)
    
    const CreatedRow = document.createElement("div")
    CreatedRow.classList.add('row')
    
    container.appendChild(CreatedRow)
    AddImage(ArtList[index], index);
    // row = document.getElementsByClassName('row');
}


// const cardWrappper = document.querySelector("width: 18rem");
// ArtList.forEach((Art) => CreateCard(Art));

// function CreateCard({name, image, link}) {
//     const CardWrapperDiv = document.createElement("div")
//     CardWrapperDiv.classList.add("card text-white bg-secondary")
//     // CardWrapperDiv.style = "width: 18rem;"

//     const Div1 = document.createElement("div")
//     Div1.className = "card-body"

//     const NameParagraphText = document.createElement("p");
//     NameParagraphText.className = "card-text";
//     NameParagraphText.innerText = name;

//     // const aTag = document.createElement("a")
//     // aTag.href = link

//     const Image = document.createElement("img");
//     // Image.className.add("card-img-top");
//     Image.setAttribute("src", image);

//     Div1.append(Image)
//     CardWrapperDiv.append(Div1)
//     // aTag.append(Image)
//     // Div1.append(NameParagraphText)
// }





// const link = "img1.html"
// const CreateImage = document.createElement("img");
// CreateImage.setAttribute("src", "IMG-20221030-WA0003.jpg")
// CreateImage.onclick = function() {
//     window.location.href = link;
// };
// document.body.appendChild(CreateImage);
// const button1 = document.createElement("button");
// button1.textContent = "1?";
// document.body.appendChild(button1);
// button1.addEventListener('click', () => {
//     FillParagraphText("1")
// })

// const button2 = document.createElement("button");
// button2.textContent = "2?";
// document.body.appendChild(button2);
// button2.addEventListener('click', () => {
//     FillParagraphText("2")
// })