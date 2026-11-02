Assignment #6: jQuery 

Name: Alibek Babassov 
Group: IT-2503

---

Brief Summary of Work Process
For this assignment, I built an interactive portfolio web page utilizing jQuery to handle DOM manipulation, event management, effects, and custom animations. 
- Setup & Selectors: Integrated jQuery via CDN, verified setup in the console, used tag/ID/class selectors, and implemented a light/dark theme toggle with `.css()` styling changes.
- Effects: Created visibility controls (`hide`, `show`, `toggle`), image fade controls (`fadeIn`, `fadeOut`, `fadeToggle`), and collapsible accordion panels using slide methods (`slideUp`, `slideDown`, `slideToggle`).
- DOM Manipulation: Implemented dynamic skill addition/removal (`append`, `prepend`, `remove`), attribute manipulation (`.attr()`), and real-time form input reflection (`.val()` and `.text()`).
- Animations: Used jQuery's `.animate()` method to create dynamic, animated skill bars that expand and collapse upon button clicks.

---

Assignment Parts & Screenshots

Part 1. Getting Started with jQuery

Task 0. Setup
Includes jQuery via CDN and tests initialization using `$(document).ready()` and console logging.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 25 47" src="https://github.com/user-attachments/assets/301bf193-0ec0-4184-882b-f9350dd6e823" />


Task 1. Selectors & CSS
Displays name, personal headline, introduction, and a profile welcome section. Uses tag, ID, and class selectors with `.text()`, `.html()`, and `.css()` to manage styling and theme switching.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 30 35" src="https://github.com/user-attachments/assets/e4aaf22e-1739-4cb0-9e22-17f03f5d5077" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 30 44" src="https://github.com/user-attachments/assets/2a8659ed-4e4f-4fea-9804-86c608d5f971" />


---

Part 2. jQuery Effects

Task 2. Visibility Methods
Features an "About Me" biography, status message, and fun facts controlled by Hide, Show, and Toggle buttons.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 35 17" src="https://github.com/user-attachments/assets/fa797d17-1ec1-4667-9b20-baccbc44371c" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 35 24" src="https://github.com/user-attachments/assets/7aba1067-0c54-4b3f-be4f-b7a9097a37b5" />



Task 3. Fade Methods
Displays profile and hobby images controlled using `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()`.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 51 40" src="https://github.com/user-attachments/assets/050135bf-7f99-4e87-929c-35a9cb45f4f5" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 18 51 49" src="https://github.com/user-attachments/assets/849bbe37-247b-4d4f-b9b3-fd287b5f7cb0" />



Task 4. Slide Methods
Features collapsible panels beneath clickable headings ("My Favorite Music", "My Favorite Movie", "My Favorite Subject") using `.slideUp()`, `.slideDown()`, and `.slideToggle()`.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 04 22" src="https://github.com/user-attachments/assets/d471a5a6-60cc-4854-83fe-29491c4e2264" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 04 26" src="https://github.com/user-attachments/assets/3ba94ac1-dce0-486c-b8bf-23fcbbb5df81" />


---

Part 3. DOM Manipulation with jQuery

Task 5. Add & Remove Elements
Manages an initial list of technical skills with text input validation, preventing empty inputs using `.append()`, `.prepend()`, and `.remove()`.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 10 18" src="https://github.com/user-attachments/assets/75d3c14e-e610-4adf-a870-f5205049ec2f" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 10 27" src="https://github.com/user-attachments/assets/b379d631-c306-4896-bc27-40307f5ceba9" />



Task 6. Modifying Attributes
Includes a social media link dynamically updated via a button click using `.attr()`.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 14 20" src="https://github.com/user-attachments/assets/22f95a81-99d6-454c-8804-cd1e5bfbe8a7" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 14 23" src="https://github.com/user-attachments/assets/c6326859-846c-461d-b429-91be1e732bc2" />



Task 7. Form Interaction
Features Name and Email inputs that display user text live below the form using `.val()` and `.text()`.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 16 28" src="https://github.com/user-attachments/assets/60a13889-d8ab-4496-91f1-9e31e295cc95" />



---

Part 4. Animations

Task 8. Basic Animation
Implements visual skill bars starting at zero width and expanding or collapsing using jQuery's `.animate()` method upon button triggers.
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 19 31" src="https://github.com/user-attachments/assets/e0de3c3b-8344-4fb0-96b6-f668bd19f531" />
<img width="1512" height="982" alt="Снимок экрана 2026-11-02 в 19 19 35" src="https://github.com/user-attachments/assets/07311a24-3313-4169-bf22-e4ccfe7f49c3" />


