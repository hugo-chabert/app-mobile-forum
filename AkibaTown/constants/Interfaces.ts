export interface Post {
    content: string;
    author: string;
    date: string;
}

export interface Props {
    title: string;
    navigation: any;
    dataToShow: any;
    type: 'post' | 'message' | 'user' | 'forum',
}
