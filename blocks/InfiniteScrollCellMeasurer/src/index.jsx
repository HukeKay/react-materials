import React from 'react';
import IceContainer from '@icedesign/container';
import { AutoSizer } from 'react-virtualized';
import cn from 'classnames';
import DynamicWidthGrid from './DynamicWidthGrid';

const data = {
  list: [
    {
      name: 'Peter Brimer',
      color: '#f44336',
      random: 'r:0, c:3',
      randomLong: 'In et mollis velit, accumsan volutpat libero.',
    },
    {
      name: 'Tera Gaona',
      color: '#3f51b5',
      random: 'In et mollis velit, accumsan volutpat libero.',
    },
    {
      name: 'Kandy Liston',
      color: '#4caf50',
      random: 'In et mollis velit, accumsan volutpat libero.',
    },
  ],
};

export default function CellMeasurerExample() {
  const getClassName = ({ columnIndex, rowIndex }) => {
    const rowClass = rowIndex % 2 === 0 ? 'even-row' : 'odd-row';

    return cn(rowClass, 'cell', {
      centeredCell: columnIndex > 2,
    });
  };

  const getContent = ({ index, datum, long = true }) => {
    switch (index % 3) {
      case 0:
        return datum.color;
      case 1:
        return datum.name;
      case 2:
        return long ? datum.randomLong : datum.random;
      default:
        return datum.color;
    }
  };
  const { list } = data;

  const DemoComponent = DynamicWidthGrid;

  return (
    <IceContainer className="infinite-scroll-cellmeasurer">
      <AutoSizer disableHeight>
        {({ width }) => (
          <div style={{ width }}>
            <DemoComponent
              getClassName={getClassName}
              getContent={getContent}
              list={list}
              width={width}
            />
          </div>
        )}
      </AutoSizer>
    </IceContainer>
  );
}
