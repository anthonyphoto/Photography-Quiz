'use strict';

class Ans {
  constructor (text, chk) {
    this.text = text;
    this.chk = chk;
  };
}
const DATA_SOURCE = [];

DATA_SOURCE.push( 
{
  question: `In low light situations, what might you do to get a better exposure?`,
  src:  `https://t1.daumcdn.net/cfile/tistory/9989B34D5C084FC419`,
  alt:  `Starbucks Shelf 2011`,
  ans: [  
      new Ans(`Decrease the ISO`, false),
      new Ans(`Increase the shutter speed`, false),
      new Ans(`Open the aperture`, true),
      new Ans(`Change the picture quality to Low`, false),
    ]
});

DATA_SOURCE.push( 
{
  question: `Which f stop will give you shallow depth of field?`,
  src:  `https://t1.daumcdn.net/cfile/tistory/998AA44D5C084FC619`,
  alt:  `Shallow depth of field, Wine 2018`,
  ans: [  
      new Ans(`F2.8`, true),
      new Ans(`F8`, false),
      new Ans(`F16`, false),
      new Ans(`F stop doesn't matter`, false),
    ]
});

DATA_SOURCE.push( 
{
  question: `What is the main difference between photographs and snapshots?`,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D5974B5C084FBD19`,
  alt:  `Playground in Summer 2009`,
  ans: [  
      new Ans(`Photographs are planned, and snapshots are not.`, false),
      new Ans(`Photographs use the rule of thirds, and snapshots do not.`, false),
      new Ans(`Snapshots are merely recordings of memory, and photographs are artistic interpretations of objects, places or events.`, true),
      new Ans(`Snapshots do not include the entire subject within the frame, and photographs do.`, false),
    ]
});

DATA_SOURCE.push( 
{
  question: `"Macro" mode defined by a flower icon, is used to.. `,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D8234B5C084FB419`,
  alt:  `Flower at Getty Center 2009`,
  ans: [  
      new Ans(`Take clear close-up shots`, true),
      new Ans(`Turn the camera on`, false),
      new Ans(`Take crisp distance shots`, false),
      new Ans(`Help the light settings`, false),
    ]
});


DATA_SOURCE.push( 
{
  question: `The amount of light or darkness on a photograph is known as the:`,
  src:  `https://t1.daumcdn.net/cfile/tistory/998A974D5C084FC919`,
  alt:  `Winery in Niagara 2018`,
  ans: [  
      new Ans(`Exposure`, true),
      new Ans(`Shutter Speed`, false),
      new Ans(`Contrast`, false),
      new Ans(`Sharpness`, false),
    ]
});

/*
DATA_SOURCE.push( 
{
  question: `Using a higher ISO..`,
  src:  ``,
  alt:  ``,
  ans: [  
      new Ans(`Is appropriate in underwater photography`, false),
      new Ans(`Doesn't effect an digital image`, false),
      new Ans(`Adds less noise/grain to a digital image`, false),
      new Ans(`Adds more noise/grain to a digital image`, true),
    ]
});
*/

DATA_SOURCE.push( 
{
  question: `What is one of the most foundational rules of composition?`,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D2AB4B5C084FB01A`,
  alt:  `Park La Brea Apartment 2009`,
  ans: [  
      new Ans(`Frame within a frame`, false),
      new Ans(`Rule of fifths`, false),
      new Ans(`Rule of thirds`, true),
      new Ans(`Diagonal lines`, false),
    ]
});

DATA_SOURCE.push( 
{
  question: `The color of light is measured in`,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D2D14B5C084FB71A`,
  alt:  `Golden Gate Bridge 2012`,
  ans: [  
      new Ans(`Stops`, false),
      new Ans(`Degrees Kelvin`, true),
      new Ans(`Cc's`, false),
      new Ans(`Bokeh`, false),
    ]
});

DATA_SOURCE.push( 
{
  question: `If you want to compress the perspective of the subject and background in your photograph you would most likely..`,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D8354B5C084FC119`,
  alt:  `versailles garden 2008`,
  ans: [  
      new Ans(`Use a faster shutter speed`, false),
      new Ans(`Use a slower shutter speed`, false),
      new Ans(`Shoot with a 200mm lens`, true),
      new Ans(`Shoot with a 24mm lens`, false),
    ]
});

DATA_SOURCE.push( 
{
  question: `When shooting in Manual Mode, which of the following controls the exposure of your capture?`,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D2C54B5C084FB21A`,
  alt:  `Seattle Downtown 2014`,
  ans: [  
      new Ans(`Aperture`, false),
      new Ans(`Shutter Speed`, false),
      new Ans(`ISO`, false),
      new Ans(`All of other 3 answers`, true),
    ]
});

DATA_SOURCE.push( 
{
  question: `The faster the shutter speed the easier it is to..`,
  src:  `https://t1.daumcdn.net/cfile/tistory/99D82C4B5C084FBB19`,
  alt:  `Santa Monica Rider 2009`,
  ans: [  
      new Ans(`Shoot moving objects that are out of focus`, false),
      new Ans(`Shoot moving objects clearly`, true),
      new Ans(`Shoot still objects`, false),
      new Ans(`Shoot one object that isn't in focus`, false),
    ]
});


//  DATA_SOURCE[0].ans.sort(_=> Math.random() - 0.5)


