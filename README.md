## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|


### Association
- has_many : groups_users
- has_many : users, through: :groups_users

## userテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|


### Association
- has many : groups_users
- has_many : group, thorugh: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|

### Association
- belongs_to :user

