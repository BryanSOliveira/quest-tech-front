import './styles.css';

type Props = {
  text: string;
  classNames: string;
  onClick: () => void;
}

function LinkModal({ classNames, text, onClick } : Props) {
  return (
    <a className={classNames} onClick={onClick}>
      {text}
    </a>
  )
}

export default LinkModal;