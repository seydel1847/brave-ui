import * as React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Footnote, Text, Heading } from '../../../src/components'

// Storybook
storiesOf('Components/Type', module)
  .add('Text', () => {
    return (
      <div>
          <div className='md'>
            <h1>Hello</h1>
            What if I don't put a tag.
            <code>Here is body copy.</code>
          </div>
          <Text tag={'em'}>Children can accept inline <strong>HTML tags to bold</strong> or make <em>the text italic though both</em> can be done via props as well.</Text>
          <Text tag={'div'}><ul><li>This unordered list</li><li>needed a div tag prop</li><li> passed instead of the default 'p'</li></ul></Text>
          <Text>This is a default Text.</Text>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text color={'defaultFade30'} strongLevel={2}>This is Text with a 8px margin on the bottom, fontWeight set to 'bold' and the color set to 'defaultFade30'.</Text>
          <Text color={'defaultFade30'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
          <Text color={'defaultFade50'}>This is a Text with 8px padding, color of 'defaultFade50' and lineHeight of 'large'.</Text>
          <Text color={'defaultFade50'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
      </div>
    )
  })
  .add('Heading', () => {
    return (
      <div className='markdown-body'>
        <Heading fontSize={0}>Heading with fontSize 0</Heading>
        <Heading tag={'h2'} fontSize={1}>Heading with fontSize 1</Heading>
        <Heading tag={'h3'} fontSize={2} lineHeight={0}>Heading with fontSize 2.</Heading>
        <Heading fontSize={3} color={'defaultFade15'}>defaultFade15 fontSize 3</Heading>
        <Heading fontSize={4} color={'defaultFade30'}>defaultFade30 fontSize 4</Heading>
        <Heading fontSize={5} color={'defaultFade50'} >defaultFade50 fontSize 5</Heading>
        <Heading fontSize={6}>Heading with fontSize 6</Heading>
        <Heading fontSize={7}>Heading with fontSize 7</Heading>
        <Heading fontSize={8}>Heading fontSize 8</Heading>
        <Heading fontSize={9}>Heading fontSize 9</Heading>
      </div>
    )
  })
  .add('Footnote', () => {
    return (
      <div className='markdown-body'>
          <Footnote>Children can accept inline <strong>HTML tags to bold</strong> or make <em>the text italic though both</em> can be done via props as well.</Footnote>
          <Footnote tag={'div'}><ul><li>This unordered list</li><li>needed a div tag prop</li><li> passed instead of the default 'p'</li></ul></Footnote>
          <Footnote>This is a default Footnote.</Footnote>
          <Footnote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Footnote>
          <Footnote color={'defaultFade30'}>This is Footnote with a 8px margin on the bottom, fontWeight set to 'bold' and the color set to 'defaultFade30'.</Footnote>
          <Footnote color={'defaultFade30'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Footnote>
          <Footnote color={'defaultFade50'}>This is a Footnote with 8px padding, color of 'defaultFade50' and lineHeight of 'large'.</Footnote>
          <Footnote color={'defaultFade50'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Footnote>
      </div>
    )
  })
