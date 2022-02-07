type Props = {
    title: string,
};

const Headline = (props: Props) => {
    return <h1>{props.title}</h1>;
};

export default Headline;
