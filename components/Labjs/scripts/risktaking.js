import * as path from 'path';

const rootFolder = __dirname;
const assetsDirectory = path.join(
  rootFolder,
  'content',
  'experiments',
  'Risk',
  'images'
);

// Define study
const studyObject = {
  title: 'root',
  type: 'lab.flow.Sequence',
  parameters: {},
  plugins: [
    {
      type: 'lab.plugins.Metadata',
    },
    {
      type: 'lab.plugins.Download',
      filePrefix: 'risk-taking-task',
    },
  ],
  metadata: {
    title: 'Risk taking task',
    description:
      'mindHive task based on Rutledge, R. B., Smittenaar, P., Zeidman, P., Brown, H. R., Adams, R. A., Lindenberger, U., ... & Dolan, R. J. (2016). Risk taking for potential reward decreases across the lifespan. Current Biology, 26(12), 1634-1639.',
    repository: '',
    contributors: '',
  },
  files: {},
  responses: {},
  content: [
    {
      type: 'lab.flow.Sequence',
      files: {
        'tree.png': `${assetsDirectory}/1505608a7775b0062266c44ef96df25902da4eac8201d3550633e5551c6a2a4f.png`,
        'dashboard.png': `${assetsDirectory}/2084e91d4dfd531fbbe8cd641f541541042abc6d1596b6a3123991e25bd65bfa.png`,
        'question.png': `${assetsDirectory}/ffe2fc3825b40cad0ed08ec7af0ba092d92e1bdeb39d465327327e87c1dd4246.png`,
      },
      parameters: {},
      responses: {},
      messageHandlers: {},
      title: 'Risk-taking task',
      content: [
        {
          type: 'lab.html.Form',
          content:
            '\u003Cheader\u003E\n  \u003Ch1\u003EAm I a risk taker?\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cdiv class="container"\u003E\n  \u003Cmain class="content-horizontal-center\n               content-vertical-center"\n               style="background: #fffaf0b5"\u003E\n    \u003Cdiv\u003E\n      \u003Cp\u003EWe all view rewards differently and some people are more willing to take risks.\u003C\u002Fp\u003E\n\n      \u003Cp\u003E\n        ${this.parameters.welcome_text}\n      \u003C\u002Fp\u003E\n\n      \u003Cform\u003E\n        \u003Cbutton type="submit"\u003EPlay\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fmain\u003E\n\u003C\u002Fdiv\u003E\n',
          files: {},
          parameters: {},
          responses: {},
          messageHandlers: {},
          title: 'Welcome',
        },
        {
          type: 'lab.html.Form',
          content:
            '\u003Cheader\u003E\n  \u003Ch1\u003EHow to play\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cdiv class="container"\u003E\n  \u003Cmain class="content-horizontal-center\n               content-vertical-center"\n               style="background: #fffaf0b5"\u003E\n    \u003Cdiv\u003E\n      \u003Cp\u003EYou start with ${this.parameters.starting_points} points. Win as many points as you can. Click (or tap) on the certain option or spin the spinner to try to get more points. Choose wisely!\u003C\u002Fp\u003E\n\n      \u003Cp\u003E\u003Cimg src=${this.files[\'dashboard.png\']} width="500px"\u003E\u003C\u002Fp\u003E\n\n      \u003Cp\u003E${this.parameters.instructions_question}\u003C\u002Fp\u003E\n\n       \u003Cp\u003E\u003Cimg src=${this.files[\'question.png\']} width="500px"\u003E\u003C\u002Fp\u003E\n  \n      \u003Cform\u003E\n        \u003Cbutton type="submit"\u003EStart Game\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fmain\u003E\n\u003C\u002Fdiv\u003E\n\n',
          files: {},
          parameters: {},
          responses: {},
          messageHandlers: {},
          title: 'Instructions',
        },
        {
          type: 'lab.html.Frame',
          context:
            '\u003Cmain data-labjs-section="frame"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \n\u003C\u002Ffooter\u003E',
          contextSelector: '[data-labjs-section="frame"]',
          files: {},
          parameters: {},
          responses: {},
          messageHandlers: {},
          title: 'Frame',
          tardy: false,
          content: {
            type: 'lab.flow.Loop',
            files: {},
            parameters: {},
            templateParameters: [
              {
                id: '1',
                type: 'gain',
                fixed: 30,
                win: 49,
                lose: 0,
              },
              {
                id: '2',
                type: 'gain',
                fixed: 35,
                win: 57,
                lose: 0,
              },
              {
                id: '3',
                type: 'gain',
                fixed: 45,
                win: 74,
                lose: 0,
              },
              {
                id: '4',
                type: 'gain',
                fixed: 55,
                win: 90,
                lose: 0,
              },
              {
                id: '5',
                type: 'gain',
                fixed: 30,
                win: 51,
                lose: 0,
              },
              {
                id: '6',
                type: 'gain',
                fixed: 35,
                win: 60,
                lose: 0,
              },
              {
                id: '7',
                type: 'gain',
                fixed: 45,
                win: 77,
                lose: 0,
              },
              {
                id: '8',
                type: 'gain',
                fixed: 55,
                win: 94,
                lose: 0,
              },
              {
                id: '9',
                type: 'gain',
                fixed: 30,
                win: 53,
                lose: 0,
              },
              {
                id: '10',
                type: 'gain',
                fixed: 35,
                win: 62,
                lose: 0,
              },
              {
                id: '11',
                type: 'lose',
                fixed: -30,
                win: 0,
                lose: -49,
              },
              {
                id: '12',
                type: 'lose',
                fixed: -35,
                win: 0,
                lose: -57,
              },
              {
                id: '13',
                type: 'lose',
                fixed: -45,
                win: 0,
                lose: -74,
              },
              {
                id: '14',
                type: 'lose',
                fixed: -55,
                win: 0,
                lose: -90,
              },
              {
                id: '15',
                type: 'lose',
                fixed: -30,
                win: 0,
                lose: -51,
              },
              {
                id: '16',
                type: 'lose',
                fixed: -35,
                win: 0,
                lose: -60,
              },
              {
                id: '17',
                type: 'lose',
                fixed: -45,
                win: 0,
                lose: -77,
              },
              {
                id: '18',
                type: 'lose',
                fixed: -55,
                win: 0,
                lose: -94,
              },
              {
                id: '19',
                type: 'lose',
                fixed: -30,
                win: 0,
                lose: -53,
              },
              {
                id: '20',
                type: 'lose',
                fixed: -35,
                win: 0,
                lose: -62,
              },
              {
                id: '21',
                type: 'mixed',
                fixed: 0,
                win: 40,
                lose: -8,
              },
              {
                id: '22',
                type: 'mixed',
                fixed: 0,
                win: 55,
                lose: -11,
              },
              {
                id: '23',
                type: 'mixed',
                fixed: 0,
                win: 75,
                lose: -15,
              },
              {
                id: '24',
                type: 'mixed',
                fixed: 0,
                win: 40,
                lose: -14,
              },
              {
                id: '25',
                type: 'mixed',
                fixed: 0,
                win: 55,
                lose: -19,
              },
              {
                id: '26',
                type: 'mixed',
                fixed: 0,
                win: 75,
                lose: -26,
              },
              {
                id: '27',
                type: 'mixed',
                fixed: 0,
                win: 40,
                lose: -20,
              },
              {
                id: '28',
                type: 'mixed',
                fixed: 0,
                win: 55,
                lose: -28,
              },
              {
                id: '29',
                type: 'mixed',
                fixed: 0,
                win: 75,
                lose: -38,
              },
              {
                id: '30',
                type: 'mixed',
                fixed: 0,
                win: 40,
                lose: -26,
              },
            ],
            sample: {
              mode: 'draw-replace',
              n: '30',
            },
            responses: {},
            messageHandlers: {
              'before:prepare': function anonymous() {
                // construct trials
                const testParameters = this.options.templateParameters;
                // take the parameters from the outside or fallback to test parameters
                const initParameters =
                  this.parameters.stimuli || testParameters;
                // take the number of trials from outside of fallback to the length of provided parameters
                const numberTrials =
                  this.parameters.nbExperimentalTrials || initParameters.length;
                // randomize is either false or true, if there is no external parameter, the default is true
                const randomize = this.parameters.randomize === 'yes';

                // a helper function to shuffle the array
                function shuffle(a) {
                  let j;
                  let x;
                  let i;
                  for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                  }
                  return a;
                }

                // constructor function which takes the information about trial and put in the object with the structure that fits the trial
                const trialConstructor = trial => ({
                  id: trial.id,
                  type: trial.type,
                  fixed: trial.fixed,
                  win: trial.win,
                  lose: trial.lose,
                });

                let trialParameters = [];
                if (randomize) {
                  shuffle(initParameters);
                }
                for (let i = 0; i < numberTrials; i++) {
                  trialParameters = trialParameters.concat(
                    trialConstructor(initParameters[i])
                  );
                }

                // assign options values to parameters of this task
                this.options.templateParameters = trialParameters;
                // randomize if needed
                if (randomize) {
                  this.options.shuffle = true;
                }
                this.options.shuffle = false;
              },
            },
            title: 'Loop',
            shuffleGroups: [],
            template: {
              type: 'lab.flow.Sequence',
              files: {},
              parameters: {},
              responses: {},
              messageHandlers: {
                'before:prepare': function anonymous() {
                  this.state.trialNum = this.options.id.split('_').pop();
                },
              },
              title: 'Sequence',
              tardy: true,
              content: [
                {
                  type: 'lab.html.Form',
                  content:
                    '\u003Cstyle\u003E\n\n  .slidecontainer {\n      width: 100%; \u002F* Width of the outside container *\u002F\n      margin: 0 auto; \u002F* Put in the middle *\u002F\n      display: grid; \n      grid-row-gap: 20px;\n      padding-top: 50px;\n  }\n  \u002F* The slider itself *\u002F\n  .slider {\n      -webkit-appearance: none;  \u002F* Override default CSS styles *\u002F\n      appearance: none;\n      width: 100%; \u002F* Full-width *\u002F\n      height: 15px; \u002F* Specified height *\u002F\n      border-radius: 5px;\n      background: linear-gradient( to right, #f78d8d 0%, #8ff591 100%);\n      outline: none; \u002F* Remove outline *\u002F\n      opacity: 0.7; \u002F* Set transparency (for mouse-over effects on hover) *\u002F\n      -webkit-transition: .2s; \u002F* 0.2 seconds transition on hover *\u002F\n      transition: opacity .2s;\n  }\n\n  \u002F* Mouse-over effects *\u002F\n  .slider:hover {\n      opacity: 1; \u002F* Fully shown on mouse-over *\u002F\n  }\n\n  \u002F* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) *\u002F\n  .slider::-webkit-slider-thumb {\n      -webkit-appearance: none; \u002F* Override default look *\u002F\n      appearance: none;\n      width: 40px; \u002F* Set a specific slider handle width *\u002F\n      height: 40px; \u002F* Slider handle height *\u002F\n      border-radius: 50%; \n      background: transparent; \u002F* Green background *\u002F\n      cursor: pointer; \u002F* Cursor on hover *\u002F\n  }\n\n  .slider::-moz-range-thumb {\n      width: 40px; \u002F* Set a specific slider handle width *\u002F\n      height: 40px; \u002F* Slider handle height *\u002F\n      border-radius: 50%; \n      background: transparent; \u002F* Green background *\u002F\n      cursor: pointer; \u002F* Cursor on hover *\u002F\n  }\n\n  .slider::-ms-thumb {\n      width: 40px; \u002F* Set a specific slider handle width *\u002F\n      height: 40px; \u002F* Slider handle height *\u002F\n      border-radius: 50%; \n      background: transparent; \u002F* Green background *\u002F\n      cursor: pointer; \u002F* Cursor on hover *\u002F\n  }\n\n  \u002F* Special styling for WebKit\u002FBlink *\u002F\n    input.visible[type=range]::-webkit-slider-thumb {\n      background: #008B8B;\n    }\n    \u002F* All the same stuff for Firefox *\u002F\n    input.visible[type=range]::-moz-range-thumb {\n      background: #008B8B;\n    }\n    \u002F* All the same stuff for IE *\u002F\n    input.visible[type=range]::-ms-thumb {\n      background: #008B8B;\n    }\n\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class="container"\u003E\n  \u003Cmain style="background: #fffaf0b5"\u003E\n    \u003Cdiv\u003E\n      \u003Cform\u003E \n        \u003Ch1\u003E${this.parameters.question}\u003C\u002Fh1\u003E\n\n        \u003Cdiv class="slidecontainer"\u003E\n          \u003Cinput type="range" name="rating_pre" min=${parameters.min_rating_value} max=${parameters.max_rating_value} class="slider" id="rating"\u003E\n          \u003Cdiv style="display:grid; grid-template-columns: 1fr 1fr;"\u003E\n            \u003Cdiv style="display:grid; justify-content: start;"\u003E\n             \u003Ch2\u003E\n               ${parameters.min_rating_label}\n              \u003C\u002Fh2\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv style="display:grid; justify-content: end;"\u003E\n              \u003Ch2\u003E\n                ${parameters.max_rating_label}\n              \u003C\u002Fh2\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E \n        \u003C\u002Fdiv\u003E\n\n        \u003Cbutton type="submit" id="continueBtn" style="visibility:hidden"\u003EContinue\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fmain\u003E\n\u003C\u002Fdiv\u003E',
                  files: {},
                  parameters: {},
                  responses: {},
                  messageHandlers: {
                    run: function anonymous() {
                      document.getElementById('rating').onclick = function(e) {
                        e.target.classList.add('visible');
                        document.getElementById(
                          'continueBtn'
                        ).style.visibility = 'visible';
                      };
                      document.getElementById('rating').ontouch = function(e) {
                        e.target.classList.add('visible');
                        document.getElementById(
                          'continueBtn'
                        ).style.visibility = 'visible';
                      };
                      document.getElementById('rating').oninput = function(e) {
                        e.target.classList.add('visible');
                        document.getElementById(
                          'continueBtn'
                        ).style.visibility = 'visible';
                      };
                    },
                  },
                  title: 'Question',
                  skip:
                    '${ this.state.trialNum % this.parameters.whenShowQuestion !== 0 }',
                  tardy: true,
                },
                {
                  type: 'lab.html.Screen',
                  files: {},
                  parameters: {},
                  responses: {},
                  messageHandlers: {
                    'before:prepare': function anonymous() {
                      console.log(
                        'debug',
                        this.state.score,
                        this.parameters.starting_points
                      );
                      const preScore =
                        this.state.score || this.parameters.starting_points;
                      let waitingForChoice = true;
                      const step = this.parameters.incrementImageFeedbackStep;
                      const blurParameter = 'blur(3px)';

                      this.options.events.click = e => {
                        const { id } = e.target;
                        // if choice is the safe option
                        if (id === 'fixed' && waitingForChoice) {
                          clearInterval(window.timer);
                          document.querySelector('#fixed').style.borderColor =
                            'rgb(60, 90, 160)';
                          document.querySelector('#gamble').style.borderColor =
                            'rgb(232, 240, 255)';
                          document.querySelector(
                            '#instruction'
                          ).style.visibility = 'hidden';
                          waitingForChoice = false;
                          // 1. highlight the chosen option
                          // 2. update the score
                          this.data.score = preScore + this.parameters.fixed;
                          // 3. play animation of adding up the points in the score
                          const safeDiv = document.querySelector('#fixed');
                          safeDiv.style.background = 'lightgreen';
                          // increment the score
                          animateValue(
                            'score',
                            preScore,
                            this.data.score,
                            2000
                          );
                          // 4. end this screen
                          setTimeout(() => {
                            this.end();
                          }, 3000);
                        }
                        // if choice is the risky option
                        if (id.startsWith('gamble') && waitingForChoice) {
                          clearInterval(window.timer);
                          document.querySelector('#fixed').style.borderColor =
                            'rgb(232, 240, 255)';
                          document.querySelector('#gamble').style.borderColor =
                            'rgb(60, 90, 160)';
                          waitingForChoice = false;
                          const riskyLeftDiv = document.querySelector(
                            '#gamble_win'
                          );
                          const riskyRightDiv = document.querySelector(
                            '#gamble_lose'
                          );
                          document.querySelector(
                            '#instruction'
                          ).style.visibility = 'hidden';
                          riskyLeftDiv.style.filter = blurParameter;
                          riskyRightDiv.style.filter = blurParameter;
                          document.querySelector('#gamble').style.background =
                            '#f2faee';

                          // 1. highlight the chosen option
                          // 2. play the lottery and update the score
                          const outcome = Math.random();
                          const spinnerOutcome =
                            Math.round(outcome) === 0 ? 'lose' : 'win';
                          this.data.spinnerOutcome = spinnerOutcome;

                          if (spinnerOutcome === 'win') {
                            this.data.score =
                              preScore + parseInt(this.parameters.win);
                          } else if (spinnerOutcome === 'lose') {
                            this.data.score =
                              preScore + parseInt(this.parameters.lose);
                          }
                          // 3. play animation of spinning the spinner
                          const spinner = document.querySelector('.spinner');
                          spinner.style.display = 'block';
                          spinner.style.animationDuration = '1s';
                          spinner.style.animationFillMode = 'forwards';
                          spinner.style.animationIterationCount = 3 + outcome;

                          // 4. show the feedback dependent on whether it is loss or win and play the animation of adding up the points in the score
                          setTimeout(() => {
                            if (spinnerOutcome === 'win') {
                              riskyLeftDiv.style.filter = 'blur(0px)';
                              riskyLeftDiv.style.background = 'lightgreen';
                            } else if (spinnerOutcome === 'lose') {
                              riskyRightDiv.style.filter = 'blur(0px)';
                              riskyRightDiv.style.background = 'pink';
                            }
                            // increment the score
                            console.log('scores:', preScore, this.data.score);
                            animateValue(
                              'score',
                              preScore,
                              this.data.score,
                              2000
                            );
                          }, 4000);
                          // 5. end this screen
                          setTimeout(() => {
                            this.end();
                          }, 8000);
                        }
                      };

                      function animateValue(id, start, end, duration) {
                        if (start === end) return;
                        const range = end - start;
                        let current = start;
                        let increment;

                        // change images
                        const imageBoard = document.querySelector(
                          '#imageBoard'
                        );
                        let changingStart = start;
                        if (end > start) {
                          increment = 1;
                        } else {
                          increment = -1;
                        }
                        const stepTime = Math.abs(Math.floor(duration / range));
                        const obj = document.getElementById(id);

                        var timer = setInterval(function() {
                          current += increment;
                          obj.innerHTML = current;
                          if (
                            Math.floor(current / step) >
                            Math.floor(changingStart / step)
                          ) {
                            imageBoard.appendChild(addOneImage());
                            changingStart = current;
                          }
                          if (
                            Math.floor(current / step) <
                            Math.floor(changingStart / step)
                          ) {
                            removeOneImage();
                            changingStart = current;
                          }
                          if (current == end) {
                            clearInterval(timer);
                          }
                        }, stepTime);
                      }

                      const addOneImage = () => {
                        const img = new Image();
                        img.src = this.files['tree.png'];
                        img.style.width = '100px';
                        return img;
                      };

                      const removeOneImage = () => {
                        const imageBoard = document.querySelector(
                          '#imageBoard'
                        );
                        const lastElement = imageBoard.lastElementChild;
                        if (lastElement) imageBoard.removeChild(lastElement);
                      };
                    },
                    run: function anonymous() {
                      const step = this.parameters.incrementImageFeedbackStep;
                      const imageBoard = document.querySelector('#imageBoard');

                      const addOneImage = () => {
                        const img = new Image();
                        img.src = this.files['tree.png'];
                        img.style.width = '100px';
                        return img;
                      };

                      const preScore =
                        this.state.score || this.parameters.starting_points;
                      const numberImages = Math.floor(preScore / step);
                      console.log(
                        'numberImages at the beginning',
                        numberImages
                      );

                      for (let i = 1; i <= numberImages; i++) {
                        imageBoard.appendChild(addOneImage());
                      }

                      const startBlinking = () => {
                        const fixed = document.querySelector('#fixed');
                        const risky = document.querySelector('#gamble');
                        window.timer = setInterval(() => {
                          console.log(fixed.style.borderColor);
                          if (
                            fixed.style.borderColor === 'rgb(232, 240, 255)'
                          ) {
                            fixed.style.borderColor = 'rgb(60, 90, 160)';
                            risky.style.borderColor = 'rgb(232, 240, 255)';
                          } else {
                            fixed.style.borderColor = 'rgb(232, 240, 255)';
                            risky.style.borderColor = 'rgb(60, 90, 160)';
                          }
                        }, 850);
                      };
                      startBlinking();
                    },
                  },
                  title: 'Decision',
                  content:
                    '\u003Cstyle\u003E\n  .info {\n    font-size: 1.5em;\n  }\n\n  .scoreBoard{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin: 0 auto;\n    width: fit-content;\n    grid-column-gap: 10px;\n    align-items: center;\n  }\n\n  #imageBoard {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n    padding: inherit;\n    margin-left: 50px;\n    margin-right: 50px;\n    border: 5px solid lavender;\n    border-radius: 10px;\n  }\n  \n  #gamble_spinner{\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n\n  #gamble_info {\n    display: grid;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  .option {\n    border-radius: 150px;\n    height: 300px;\n    width: 300px;\n    display: grid;\n    align-items: center;\n    justify-self: center;\n    padding: 10px;\n  }\n  .option:hover {\n    background-color: #e8f0ff;\n    cursor: pointer;\n  }\n\n.spinner {\n  z-index: 1;\n  margin: 100px auto;\n  font-size: 25px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  animation-name: load5;\n  animation-duration: 0s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 0;\n  animation-direction: normal;\n  animation-fill-mode: forwards;\n}\n\n  @-webkit-keyframes load5 {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #2b2b2b, 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.5), -1.8em -1.8em 0 0em rgba(43,43,43, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.7), 1.8em -1.8em 0 0em #2b2b2b, 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.5), 1.8em -1.8em 0 0em rgba(43,43,43, 0.7), 2.5em 0em 0 0em #2b2b2b, 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.5), 2.5em 0em 0 0em rgba(43,43,43, 0.7), 1.75em 1.75em 0 0em #2b2b2b, 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.5), 1.75em 1.75em 0 0em rgba(43,43,43, 0.7), 0em 2.5em 0 0em #2b2b2b, -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.5), 0em 2.5em 0 0em rgba(43,43,43, 0.7), -1.8em 1.8em 0 0em #2b2b2b, -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.5), -1.8em 1.8em 0 0em rgba(43,43,43, 0.7), -2.6em 0em 0 0em #2b2b2b, -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.5), -2.6em 0em 0 0em rgba(43,43,43, 0.7), -1.8em -1.8em 0 0em #2b2b2b;\n    }\n  }\n  @keyframes load5 {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #2b2b2b, 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.5), -1.8em -1.8em 0 0em rgba(43,43,43, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.7), 1.8em -1.8em 0 0em #2b2b2b, 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.5), 1.8em -1.8em 0 0em rgba(43,43,43, 0.7), 2.5em 0em 0 0em #2b2b2b, 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.5), 2.5em 0em 0 0em rgba(43,43,43, 0.7), 1.75em 1.75em 0 0em #2b2b2b, 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.5), 1.75em 1.75em 0 0em rgba(43,43,43, 0.7), 0em 2.5em 0 0em #2b2b2b, -1.8em 1.8em 0 0em rgba(43,43,43, 0.2), -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.5), 0em 2.5em 0 0em rgba(43,43,43, 0.7), -1.8em 1.8em 0 0em #2b2b2b, -2.6em 0em 0 0em rgba(43,43,43, 0.2), -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.5), -1.8em 1.8em 0 0em rgba(43,43,43, 0.7), -2.6em 0em 0 0em #2b2b2b, -1.8em -1.8em 0 0em rgba(43,43,43, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(43,43,43, 0.2), 1.8em -1.8em 0 0em rgba(43,43,43, 0.2), 2.5em 0em 0 0em rgba(43,43,43, 0.2), 1.75em 1.75em 0 0em rgba(43,43,43, 0.2), 0em 2.5em 0 0em rgba(43,43,43, 0.2), -1.8em 1.8em 0 0em rgba(43,43,43, 0.5), -2.6em 0em 0 0em rgba(43,43,43, 0.7), -1.8em -1.8em 0 0em #2b2b2b;\n    }\n}\n  \n\u003C\u002Fstyle\u003E\n\n\u003Cheader\u003E\n  \u003Cdiv id="instruction"\u003E\n    \u003Ch2\u003E\n      Spin the spinner or play it safe!\n    \u003C\u002Fh2\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain\u003E\n\n  \u003Cdiv style="display: grid; grid-template-columns: 1fr 1fr; margin: 0 auto; grid-column-gap: 50px; min-height: 250px; align-items: center; padding: 10px;" class="info"\u003E\n\n    \u003Cdiv id="gamble_spinner" style="display:grid; align-content: center;"\u003E\n      \u003Cdiv class="spinner" style="display:none;"\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv id="gamble_info"\u003E\n        \u003Cdiv class="option" id="gamble" style="grid-template-columns: 1fr 1fr; border: 15px solid rgb(232, 240, 255);"\u003E\n          \u003Cdiv id="gamble_wrapper_win" style="height: 100%; display: grid; align-items: center; border-right: 1px solid grey;"\u003E\n            \u003Cdiv id="gamble_win" style="height: 20%; display: grid; align-items: center; border-radius: 10px; z-index: 2; "\u003E\n                Gain ${parameters.win}\n              \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv id="gamble_wrapper_lose" style="height: 100%; display: grid; align-items: center; border-left: 1px solid grey;"\u003E\n            \u003Cdiv id="gamble_lose" style="height: 20%; display: grid; align-items: center; border-radius: 10px; z-index: 2;"\u003E\n                Lose ${parameters.lose}\n            \u003C\u002Fdiv\u003E      \n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class="option" id="fixed" style="border: 15px solid rgb(232, 240, 255);"\u003E\n     ${parameters.fixed \u003C 0 ? \'Lose\' : \'Gain\'} ${parameters.fixed}\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class="scoreBoard"\u003E\n    \u003Ch3\u003E Score \u003C\u002Fh3\u003E\n    \u003Cp id="score" class="info"\u003E ${state.score || this.parameters.starting_points} \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv id="imageBoard"\u003E\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fmain\u003E',
                  tardy: false,
                },
              ],
            },
          },
        },
        {
          type: 'lab.html.Form',
          content:
            '\u003Cheader\u003E\n\n\u003C\u002Fheader\u003E\n\n\u003Cmain\u003E\n\n  \u003Ch1\u003EExperiment\u003C\u002Fh1\u003E\n  \n  \u003Cp\u003EThank you for taking part\u003C\u002Fp\u003E\n\n  \u003Cform\u003E\n    \u003Cbutton type="submit"\u003EFinish\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n\n\u003C\u002Ffooter\u003E',
          files: {},
          parameters: {},
          responses: {},
          messageHandlers: {},
          title: 'End',
        },
      ],
    },
  ],
};

// export
export default studyObject;
