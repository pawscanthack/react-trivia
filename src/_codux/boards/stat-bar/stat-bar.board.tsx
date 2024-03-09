import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar totalQuestions={5} currentQuestion={2} correct={0} incorrect={0}/>,
    isSnippet: true,
});