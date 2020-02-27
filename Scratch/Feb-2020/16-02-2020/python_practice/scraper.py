import requests
from bs4 import BeautifulSoup


URL = 'https://www.amazon.com.au/Nintendo-Switch-Neon-Blue-packaging/dp/B07VNJDW4C/ref=sr_1_1?keywords=switch&qid=1581828454&sr=8-1'


headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36"}


def check_price():


page = requests.get(URL, headers=headers)

soup = BeautifulSoup(page.content, 'html.parser')


title = soup.find(id="productTitle").get_text()
price = soup.find(id="priceblock_ourprice").get_text()
converted_price = float(price[0:4])

if(converted_price < 500):
    send_mail()

print(converted_price)
print(title.strip())


def send_mail()
