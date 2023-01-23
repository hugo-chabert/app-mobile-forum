import 'intl'
import 'intl/locale-data/jsonp/en'

const formatter = Intl.NumberFormat('en', { notation: 'compact' });

const fakeMsgs = [
    {
        content: "djqpdjqjdpodkjpo zpopdi oz oqpo iqpozdiq ni izjqd",
        author: "John Doe",
        date: "2021-01-01",
        forumName: "One Piece",
    },
    {
        content: "djqpdjqjdpodkjpo zpopdi oz oqpo iqpozdiq ni izjqd",
        author: "Jane Doe",
        date: "2021-01-01",
        forumName: "Naruto",
    },
    {
        content: "djqpdjqjdpodkjpo zpopdi oz oqpo iqpozdiq ni izjqd",
        author: "Sylvain",
        date: "2021-01-01",
        forumName: "Chainsaw Man",
    },
]

const fakePosts = [
    {
        forumName: "One Piece",
        title: "One Piece surcoté ??????",
        author: 'John Doe',
        date: "2021-01-01",
        msgAmount: formatter.format(30_000),
    },
    {
        forumName: "L'attaque des titans",
        title: "[Theorie] Erwin n'est pas mort",
        author: 'John Doe',
        date: "2021-01-01",
        msgAmount: formatter.format(17_000),
    },
    {
        forumName: "Boruto",
        title: "Sasuke qui se bat contre des dinosaures ?? On en parle ?",
        author: 'John Doe',
        date: "2021-01-01",
        msgAmount: formatter.format(61),
    },
]

const fakeUsers = [
    {
        username: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        daysSinceRegistration: "1",
    },
    {
        username: "Mary Jane",
        avatar: "https://i.pravatar.cc/150?img=1",
        daysSinceRegistration: "3",
    },
    {
        username: "Xavier Dupont de Ligonnès",
        avatar: "https://i.pravatar.cc/150?img=1",
        daysSinceRegistration: "3",
    },
]


export { fakeMsgs, fakePosts, fakeUsers }