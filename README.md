## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|message|references|null: false, foreign_key: true|

### Association
- has_many : groups_users
- has_many : users, through: :groups_users
- has many : messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|unique|null: false|
|password|string|null: false|
|name|unique|null: false|
|messages|references|null: false, foreign_key: true|

### Association
- has many : groups_users
- has_many : groups, thorugh: :groups_users
- has many : messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|
|body|text|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to : user
- belong_to : group
