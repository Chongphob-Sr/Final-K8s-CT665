const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">chongphob Srihu / Balls</h2>
    <h3 style="text-align: center;">ID: 65130127</h3>
    <img src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.18169-9/1488786_671478036226287_1561957669_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H9KBssHsXQkQ7kNvgFYl82T&_nc_ht=scontent.fbkk22-3.fna&oh=00_AYD7E4sh5zE1qKUsR-2Mpwlsv3XXKaVvr73aw7iULqY81A&oe=66718355" style="width: 100%"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/researchplan" style="text-align: center;">My Research Plan</a> 33
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
    <p>  รถยนต์ไฟฟ้า (Electric Vehicle, EV) นั้นเพิ่งจะเริ่มเป็นที่นิยมเมื่อไม่กี่ปีที่ผ่านมาและถูกพูดถึงอยู่บ่อยครั้ง เมื่อมีการเผชิญกับปัญหาโลกร้อน มลพิษทางอากาศ PM2.5 และทิศทางพลังงานโลกที่มุ่งไปสู่การผลิตและการใช้พลังงานที่มีการปลดปล่อยก๊าซเรือนกระจกแบบสุทธิเป็นศูนย์ จึงทำให้รัฐบาลจากหลายประเทศทั่วโลกรวมถึงประเทศไทยสนับสนุนให้ประชาชนหันมาใช้รถยนต์ไฟฟ้า ซึ่งข้อดี-ข้อเสียของรถยนต์ไฟฟ้า สามารถสรุป</p>
    <a href="/">Home</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>ศึกษาปัญหา</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>literature review</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ออกแบบโครงสร้างการทดลอง</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม MVC</td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม Front-end/Back-end</td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบ unit-test ทั้ง 2 แบบ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานจริงและบันทึกผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
