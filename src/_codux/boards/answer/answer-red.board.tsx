import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'AnswerGreen',
    Board: () => <Answer color="green" text="Jane" />,
    isSnippet: true,
});
