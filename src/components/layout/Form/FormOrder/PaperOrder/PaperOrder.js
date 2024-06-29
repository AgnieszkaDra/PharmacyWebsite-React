import React from 'react'
import { FaTrash } from 'react-icons/fa'
import Typography from '../../../../ui/Typography/Typography'
import PropTypes from 'prop-types'

export const PaperOrder = (props) => {
  const { data, result, remove } = props
  const handleClick = (id) => {
    remove(id, data)
  }
  return (
    <div>
      <Typography
        variant={'h3'}
        className={'underline mb-8'}
      >
        Zamówienie - leki na receptę papierową
      </Typography>
      {result.map((item) => (
        <div key={item.id}>
          <img
            src={item.firstImage}
            alt={'Uploaded'}
            className={'w-32 h-32 object-cover'}
          />
          <button
            type={'button'}
            onClick={() => handleClick(item.id)}
            className={'ml-8'}
          >
            <FaTrash />
          </button>
        </div>
      ))}

    </div>
  )
}

PaperOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func,
  remove: PropTypes.func
}

export default PaperOrder
