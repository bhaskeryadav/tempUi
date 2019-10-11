export const ubuntuFont = {
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontWeight: '650'
}

export const timeStyle = {
    ...ubuntuFont,
    fontSize: '13px',
    verticalAlign: 'top',
    paddingRight: '10px'
}

export const styles = {
    'Green' : { ...ubuntuFont, color: 'orange' },
    'Red' : {...ubuntuFont,color:'#ff4d4d'},
    'Default' : {...ubuntuFont,color:'#d9d9d9', fontWeight: '550'},
    'twitter' : {...ubuntuFont,color:'#d9d9d9', fontWeight: '550'}
}