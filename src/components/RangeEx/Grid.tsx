import { range } from './utils';

export default function Grid({ numRows, numCols }: IProps) {
  return (
    <div className="grid">
      {range(numRows).map((row) => (
        <div className="row" key={crypto.randomUUID()}>
          {range(numCols).map((col) => (
            <div className="cell" key={crypto.randomUUID()} />

            
          ))}
        </div>
      ))}
    </div>
  );
}

type IProps = {
  numRows: number;
  numCols: number;
};
