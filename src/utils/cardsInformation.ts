const cards = [
    {
        data: 'luffy',
        imgUrl: '/images/luffy.jpeg',
        alt: 'back of card'
    },
    {
        data: 'zoro',
        imgUrl: '/images/zoro.jpeg',
        alt: 'back of card'
    },
    {
        data: 'nami',
        imgUrl: '/images/nami.jpeg',
        alt: 'back of card'
    },
    {
        data: 'sanji',
        imgUrl: '/images/sanji.jpeg',
        alt: 'back of card'
    },
    {
        data: 'usopp',
        imgUrl: '/images/usopp.jpeg',
        alt: 'back of card'
    },
    {
        data: 'chopper',
        imgUrl: '/images/chopper.jpeg',
        alt: 'back of card'
    },
    {
        data: 'robbin',
        imgUrl: '/images/robbin.jpeg',
        alt: 'back of card'
    },
    {
        data: 'franky',
        imgUrl: '/images/franky.jpeg',
        alt: 'back of card'
    },
    {
        data: 'brock',
        imgUrl: '/images/brock.jpeg',
        alt: 'back of card'
    },
    {
        data: 'jinbei',
        imgUrl: '/images/jinbei.jpeg',
        alt: 'back of card'
    }
]

export function pairOfCards() {
    let newArray: { data: string; imgUrl: string; alt: string; }[] = [];

    for (let count = 0; count < 6;) {
        let card = cards[Math.floor(Math.random() * 10)]
        if (!newArray.includes(card)) {
            newArray.push(card)
            ++count;
        }

        if (count === 6) break;
    }

    return [...newArray, ...newArray].sort(() => Math.random() - 0.5)
}

