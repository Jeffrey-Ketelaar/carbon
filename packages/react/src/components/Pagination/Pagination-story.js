/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  array,
  boolean,
  number,
  text,
} from '@storybook/addon-knobs';
import Pagination from '../Pagination';

const props = () => ({
  disabled: boolean('Disable page inputs (disabled)', false),
  page: number('The current page (page)', 1),
  totalItems: number('Total number of items (totalItems)', 103),
  pagesUnknown: boolean('Total number of items unknown (pagesUnknown)', false),
  pageInputDisabled: boolean(
    '[Deprecated]: Disable page input (pageInputDisabled)',
    undefined
  ),
  backwardText: text(
    'The description for the backward icon (backwardText)',
    'Previous page'
  ),
  forwardText: text(
    'The description for the forward icon (forwardText)',
    'Next page'
  ),
  pageSize: number('Number of items per page (pageSize)', 10),
  pageSizes: array('Choices of `pageSize` (pageSizes)', [10, 20, 30, 40, 50]),
  itemsPerPageText: text(
    'Label for `pageSizes` select UI (itemsPerPageText)',
    'Items per page:'
  ),
  onChange: action('onChange'),
});

storiesOf('Pagination', module)
  .addParameters({
    component: Pagination,
  })
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ maxWidth: '800px' }}>{story()}</div>)
  .add('Pagination', () => <Pagination {...props()} />, {
    info: {
      text: `
            The pagination component is used to switch through multiple pages of items, when only a maxium number of items can be displayed per page. Can be used in combination with other components like DataTable.
          `,
    },
  })
  .add(
    '↪︎ multiple Pagination components',
    () => {
      return (
        <div>
          <Pagination {...props()} />
          <Pagination {...props()} />
        </div>
      );
    },
    {
      info: {
        text: `Showcasing unique ids for each pagination component`,
      },
    }
  );
