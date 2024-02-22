import mongoose from "mongoose";

// Data for puppies products

let products = [
    {
        name: "Spot",
        breed: "Beagle",
        price: "300",
        imageUrl: "https://s3.amazonaws.com/static.organiclead.com/Site-fe665614-86f6-42df-8e54-3f3c72d42873/shutterstock_529323067.jpg",
    },
    {
        name: "Blue",
        breed: "Staffordshire Bull Terrier",
        price: "600",
        imageUrl: "https://img.freepik.com/premium-photo/blue-eyed-staffy-puppy_860816-13.jpg",
    },
    {
        name: "Max",
        breed: "Husky",
        price: "500",
        imageUrl: "https://i.ebayimg.com/images/g/BKcAAOSwK21gNrxk/s-l1200.webp",
    },
    {
        name: "Marley",
        breed: "Malitpoo",
        price: "700",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTRpMoqK3OGuWtgz643PEAyylxi3pznEkcQ&usqp=CAU",
    },
    {
        name: "Bailey",
        breed: "Chocolate Lab",
        price: "400",
        imageUrl: "https://i.pinimg.com/originals/08/f9/07/08f90711f78bb510d60c6346f74ffb10.jpg",
    },
    {
        name: "Alaska",
        breed: "Siberian Husky",
        price: "800",
        imageUrl: "https://i.pinimg.com/736x/9e/93/8d/9e938de80c41e7177b10672f1f70a2b6.jpg",
    },
    {
        name: "Harley",
        breed: "Jack Russell Terrier",
        price: "300",
        imageUrl: "https://images.prismic.io/wisdom/89008d65-d623-48ae-aa94-a959b94671ca_blue-eyes-puppy.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C799&w=919&h=612",
    },
    {
        name: "Jax",
        breed: "Pit Bull",
        price: "900",
        imageUrl: "https://www.thesprucepets.com/thmb/hIu5ILV9RYci7sXOtF17OsXWQHA=/3054x0/filters:no_upscale():strip_icc()/dog-breeds-with-blue-eyes-5089039-10-b6fa574c3463402db3389e2e048d43e4.jpg",
    },
    {
        name: "Nixon",
        breed: "Dalmatian",
        price: "900",
        imageUrl: "https://t3.ftcdn.net/jpg/04/00/74/58/360_F_400745828_vFQ4dbW8BIswnPIEZmnNI7Ch7163xvNi.jpg",
    },
    {
        name: "Avery",
        breed: "Rottweiler",
        price: "900",
        imageUrl: "https://images.prismic.io/trustedhousesitters/82f6925d-a8d0-4177-acbc-bc7db8f30a07_rottweiler+names+male.png?auto=compress,format&rect=0,0,1920,800&w=1920&h=800",
    }
];

export default products;