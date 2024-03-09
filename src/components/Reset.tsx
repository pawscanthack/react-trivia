import Answer_module from './Answer.module.scss';
import App_module from '../App.module.scss';
import Question_module from './Question.module.scss';
import Classnames from 'classnames';
import Answers_module from './Answers.module.scss';
import Reset_module from './Reset.module.scss';
type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {
    return (
        <div>
            <h1 className={Reset_module['reset-text']}>
                You scored: {(props.correctQuestions / props.totalQuestions) * 100}%
            </h1>
            <button
                onClick={props.onPress}
                className={Classnames(App_module['next-btn'], Answer_module.answer)}
            >
                Press to try again!
            </button>
        </div>
    );
}

export default Reset;
